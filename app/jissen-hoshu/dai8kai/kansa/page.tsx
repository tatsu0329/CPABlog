'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function KansaDai8kaiListPage() {
  const navbarRef = useRef<HTMLElement>(null)
  
  // 利用可能な年度のリスト（JSONファイルが追加されたら、ここに年度を追加）
  const availableYears = [
    { year: 2025, date: "2025年3月16日（日）実施" },
    // 他の年度を追加する場合は、ここに追加
    // { year: 2024, date: "2024年3月17日（日）実施" },
    // { year: 2023, date: "2023年3月19日（日）実施" },
  ]

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

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="site-title">監査総合グループ第8回考査問題</h1>
          <p className="site-subtitle">年度別の問題一覧</p>
        </div>
      </header>

      <nav className="navbar" ref={navbarRef}>
        <div className="container">
          <ul className="nav-menu">
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/jissen-hoshu/dai8kai">実務補習第8回考査</Link></li>
            <li><Link href="/shuryo">修了考査</Link></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          <section className="intro-section">
            <h2>監査総合グループ第8回考査問題一覧</h2>
            <p className="intro-text">
              実務補習第8回考査の監査総合グループの問題を年度別に確認できます。
              年度を選択して問題を表示してください。
            </p>
          </section>

          <div className="summary-content" style={{ marginTop: '40px' }}>
            {availableYears.map((item) => (
              <article key={item.year} className="exam-section guide-card">
                <div className="exam-header">
                  <span className="exam-number">{item.year}</span>
                  <h2>{item.year}年度 監査総合グループ第8回考査</h2>
                </div>
                <div className="exam-content">
                  <p>
                    <strong>実施日</strong>：{item.date}
                  </p>
                  <div className="exam-info-box highlight" style={{ marginTop: '20px' }}>
                    <Link href={`/jissen-hoshu/dai8kai/kansa/${item.year}`} style={{ 
                      color: 'var(--primary-color)', 
                      textDecoration: 'none', 
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      display: 'inline-block'
                    }}>
                      {item.year}年度の問題を見る →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
            <h3>データの格納場所</h3>
            <p>
              各年度の問題データは以下の場所にJSON形式で格納されています：
            </p>
            <div style={{ marginTop: '15px', padding: '15px', backgroundColor: 'white', borderRadius: '6px' }}>
              <code style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
                /data/jissen-hoshu/dai8kai/kansa/[年度].json
              </code>
            </div>
            <p style={{ marginTop: '15px' }}>
              例：2025年度の場合 → <code style={{ fontFamily: 'monospace' }}>/data/jissen-hoshu/dai8kai/kansa/2025.json</code>
            </p>
          </div>

          <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
            <p style={{ margin: 0 }}>
              <Link href="/jissen-hoshu/dai8kai" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
                ← 実務補習第8回考査のページに戻る
              </Link>
            </p>
          </div>
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


