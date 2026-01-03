import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { year: string } }
) {
  try {
    const year = params.year
    const filePath = path.join(process.cwd(), 'data', 'jissen-hoshu', 'dai8kai', 'kansa', `${year}.json`)
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Data not found' },
        { status: 404 }
      )
    }

    const fileContents = fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(fileContents)
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error reading JSON file:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}



