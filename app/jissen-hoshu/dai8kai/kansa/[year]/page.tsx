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
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

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
    // 画像拡大モーダル用のグローバル関数を定義
    ;(window as any).openImageModal = (src: string) => {
      setEnlargedImage(src)
    }

    // ESCキーでモーダルを閉じる
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && enlargedImage) {
        setEnlargedImage(null)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
      delete (window as any).openImageModal
    }
  }, [enlargedImage])

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
                            
                            // 許可されたタグを保護（imgタグは自己終了タグも含む）
                            html = html.replace(/<(\/?)(u|strong|b|em|i|span|img)(\s+[^>]*)?(\/?)>/g, (match) => {
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
                            
                            // imgタグにスタイルとクリックイベントを追加
                            html = html.replace(/<img([^>]*)>/g, (match, attributes) => {
                              // 既存のstyle属性を確認
                              const styleMatch = attributes.match(/style="([^"]*)"/)
                              let style = 'max-width: 100%; height: auto; cursor: pointer; display: block; margin: 20px auto; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s;'
                              
                              if (styleMatch) {
                                // 既存のstyleがある場合は追加
                                style = styleMatch[1] + '; ' + style
                                attributes = attributes.replace(/style="[^"]*"/, '')
                              }
                              
                              // src属性から画像パスを取得
                              const srcMatch = attributes.match(/src="([^"]*)"/)
                              const src = srcMatch ? srcMatch[1] : ''
                              
                              return `<img${attributes} style="${style}" onclick="window.openImageModal('${src}')" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'" />`
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

      {/* 画像拡大モーダル */}
      {enlargedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: '20px'
          }}
          onClick={() => setEnlargedImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={enlargedImage}
              alt="拡大画像"
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
              }}
            />
            <button
              onClick={() => setEnlargedImage(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: '#333',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
              }}
              aria-label="閉じる"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 公認会計士試験ガイド. 最新情報は公式サイトでご確認ください.</p>
        </div>
      </footer>
    </>
  )
}
