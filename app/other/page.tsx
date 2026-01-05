'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function OtherPage() {
  const navbarRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // スクロール時のナビゲーションバーのスタイル変更
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

    // フェードインアニメーション
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

    const sections = document.querySelectorAll('.exam-section, .detail-section')
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
          <h1 className="site-title">その他</h1>
          <p className="site-subtitle">その他のコンテンツ一覧</p>
        </div>
      </header>

      <nav className="navbar" ref={navbarRef}>
        <div className="container">
          <ul className="nav-menu">
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/tandoku">短答式試験</Link></li>
            <li><Link href="/ronbun">論文式試験</Link></li>
            <li><Link href="/shuryo">修了考査</Link></li>
            <li><Link href="/study-guide">対策方法</Link></li>
            <li><Link href="/other">その他</Link></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          <section className="intro-section">
            <h2>その他のコンテンツ</h2>
            <p className="intro-text">
              公認会計士試験に関するその他のコンテンツをご紹介します。
            </p>
          </section>

          <div className="summary-content" style={{ marginTop: '40px' }}>
            <article className="exam-section">
              <div className="exam-header">
                <span className="exam-number">01</span>
                <h2>実務補習第8回考査とは</h2>
              </div>
              
              <div className="exam-content">
                <div className="exam-overview">
                  <p>
                    実務補習の過程で実施される第8回考査についての情報です。
                    実務補習の後期に実施される重要な考査です。
                  </p>
                </div>

                <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
                  <Link href="/jissen-hoshu/dai8kai" style={{ 
                    color: 'var(--primary-color)', 
                    textDecoration: 'none', 
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    display: 'inline-block'
                  }}>
                    詳細ページを見る →
                  </Link>
                </div>
              </div>
            </article>

            <article className="exam-section" style={{ marginTop: '30px' }}>
              <div className="exam-header">
                <span className="exam-number">02</span>
                <h2>監査総合グループ第8回考査問題一覧</h2>
              </div>
              
              <div className="exam-content">
                <div className="exam-overview">
                  <p>
                    実務補習第8回考査の監査総合グループの問題を年度別に確認できます。
                    2022年度から2025年度までの問題が閲覧できます。
                  </p>
                </div>

                <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
                  <Link href="/jissen-hoshu/dai8kai/kansa" style={{ 
                    color: 'var(--primary-color)', 
                    textDecoration: 'none', 
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    display: 'inline-block'
                  }}>
                    問題一覧を見る →
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
            <p style={{ margin: 0 }}>
              <Link href="/" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
                ← ホームページに戻る
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

