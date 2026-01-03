'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

type QuestionData = {
  id: string
  question: string
}

type ExamData = {
  category: {
    exam: string
  }
  questions: QuestionData[]
}

export default function KansaDai8kaiYearPage({
  params,
}: {
  params: { year: string }
}) {
  const year = parseInt(params.year)
  const navbarRef = useRef<HTMLElement>(null)
  const [examData, setExamData] = useState<ExamData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/jissen-hoshu/dai8kai/kansa/${year}`)
        if (!response.ok) {
          throw new Error('Data not found')
        }
        const data = await response.json()
        setExamData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [year])

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return
      const currentScroll = window.pageYOffset
      
      if (currentScroll > 100) {
        navbarRef.current.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
      } else {
        navbarRef.current.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    }

    window.addEventListener('scroll', handleScroll)

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ;(entry.target as HTMLElement).style.opacity = '1'
          ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('.exam-section, .detail-section, .guide-section')
    sections.forEach(section => {
      ;(section as HTMLElement).style.opacity = '0'
      ;(section as HTMLElement).style.transform = 'translateY(20px)'
      ;(section as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(section)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (loading) {
    return (
      <>
        <header className="header">
          <div className="container">
            <h1 className="site-title">監査総合グループ第8回考査</h1>
            <p className="site-subtitle">{year}年度</p>
          </div>
        </header>

        <nav className="navbar" ref={navbarRef}>
          <div className="container">
            <ul className="nav-menu">
              <li><Link href="/">ホーム</Link></li>
              <li><Link href="/jissen-hoshu/dai8kai/kansa">問題一覧</Link></li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <div className="container">
            <article className="exam-section">
              <div className="exam-content">
                <div className="exam-info-box highlight">
                  <p>読み込み中...</p>
                </div>
              </div>
            </article>
          </div>
        </main>
      </>
    )
  }

  if (error || !examData) {
    return (
      <>
        <header className="header">
          <div className="container">
            <h1 className="site-title">監査総合グループ第8回考査</h1>
            <p className="site-subtitle">{year}年度</p>
          </div>
        </header>

        <nav className="navbar" ref={navbarRef}>
          <div className="container">
            <ul className="nav-menu">
              <li><Link href="/">ホーム</Link></li>
              <li><Link href="/jissen-hoshu/dai8kai/kansa">問題一覧</Link></li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <div className="container">
            <article className="exam-section">
              <div className="exam-content">
                <div className="exam-info-box highlight">
                  <h3>{year}年度のデータが見つかりません</h3>
                  <p>
                    {year}年度の問題データはまだ追加されていません。
                  </p>
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/jissen-hoshu/dai8kai/kansa" style={{ 
                      color: 'var(--primary-color)', 
                      textDecoration: 'none', 
                      fontWeight: '600'
                    }}>
                      ← 問題一覧に戻る
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="site-title">{examData.category.exam}</h1>
          <p className="site-subtitle">{year}年度</p>
        </div>
      </header>

      <nav className="navbar" ref={navbarRef}>
        <div className="container">
          <ul className="nav-menu">
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/jissen-hoshu/dai8kai/kansa">問題一覧</Link></li>
            <li><Link href="/jissen-hoshu/dai8kai">実務補習第8回考査</Link></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          <article className="exam-section">
            <div className="exam-header">
              <span className="exam-number">{year}</span>
              <h2>{examData.category.exam}</h2>
            </div>
            
            <div className="exam-content">
              <div className="guide-section">
                <div className="exam-info-box highlight">
                  <h3>試験情報</h3>
                  <ul>
                    <li><strong>試験名</strong>：{examData.category.exam}</li>
                    <li><strong>年度</strong>：{year}年度</li>
                  </ul>
                </div>
              </div>

              <div className="guide-section">
                <h3>問題</h3>
                <div className="exam-info-box">
                  {examData.questions.map((q, index) => (
                    <div key={index} style={{ marginTop: '30px', padding: '20px', backgroundColor: 'var(--bg-light)', borderRadius: '8px' }}>
                      <h4 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>
                        {q.id}
                      </h4>
                      <div 
                        style={{ 
                          marginBottom: '15px', 
                          lineHeight: '1.8',
                          wordBreak: 'break-word',
                          whiteSpace: 'pre-wrap'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: (() => {
                            let html = q.question
                            
                            // まず&をエスケープ
                            html = html.replace(/&/g, '&amp;')
                            
                            // 許可されたHTMLタグを一時的に保護（プレースホルダーに置き換え）
                            const protectedTags: Array<{ placeholder: string, tag: string }> = []
                            let tagIndex = 0
                            
                            // 許可されたタグを保護
                            html = html.replace(/<(\/?)(u|strong|b|em|i|span|img)(\s+[^>]*)?>/g, (match) => {
                              const placeholder = `___PROTECTED_TAG_${tagIndex++}___`
                              protectedTags.push({ placeholder, tag: match })
                              return placeholder
                            })
                            
                            // すべての<と>をエスケープ（保護されたタグ以外）
                            html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;')
                            
                            // 改行を<br />に変換
                            html = html.replace(/\\n/g, '<br />')
                            
                            // 保護したタグを元に戻す
                            protectedTags.forEach(({ placeholder, tag }) => {
                              html = html.replace(placeholder, tag)
                            })
                            
                            return html
                          })()
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
                <p style={{ margin: 0 }}>
                  <Link href="/jissen-hoshu/dai8kai/kansa" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
                    ← 問題一覧に戻る
                  </Link>
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 公認会計士試験ガイド. 最新情報は公式サイトでご確認ください.</p>
        </div>
      </footer>
    </>
  )
}
