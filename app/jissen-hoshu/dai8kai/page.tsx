'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Dai8kaiPage() {
  const navbarRef = useRef<HTMLElement>(null)

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
          <h1 className="site-title">実務補習第8回考査</h1>
          <p className="site-subtitle">実務補習の過程で実施される考査について</p>
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
          <article className="exam-section">
            <div className="exam-header">
              <span className="exam-number">第8回</span>
              <h2>実務補習第8回考査とは</h2>
            </div>
            
            <div className="exam-content">
              <div className="exam-overview">
                <h3>概要</h3>
                <p>
                  実務補習第8回考査は、実務補習所で実施される考査の一つです。
                  実務補習の過程では、複数回の考査が実施され、
                  実務補習生の学習成果を確認します。
                  第8回考査は、実務補習の後期に実施される重要な考査です。
                </p>
              </div>

              <div className="detail-section">
                <h3>実務補習考査について</h3>
                <div className="exam-info-box highlight">
                  <h4>実務補習考査の位置づけ</h4>
                  <p>
                    実務補習所では、実務補習の過程で定期的に考査が実施されます。
                    これらの考査は、実務補習生が実務補習の内容を理解しているかを確認し、
                    修了考査に向けた準備を進めるためのものです。
                  </p>
                  <ul style={{ marginTop: '15px' }}>
                    <li>実務補習の学習成果を確認する</li>
                    <li>修了考査に向けた準備を進める</li>
                    <li>実務的な知識と経験を身につける</li>
                  </ul>
                </div>
              </div>

              <div className="detail-section">
                <h3>第8回考査の特徴</h3>
                <div className="exam-info-box">
                  <h4>後期の重要な考査</h4>
                  <p>
                    第8回考査は、実務補習の後期に実施される考査です。
                    これまでの実務補習で学んだ内容を総合的に確認する重要な考査となります。
                  </p>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>出題範囲</h4>
                      <p>
                        これまでの実務補習で学んだ内容を中心に出題されます。
                      </p>
                      <ul>
                        <li>監査実務</li>
                        <li>会計実務</li>
                        <li>実務補習での学習内容</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>出題形式</h4>
                      <p>
                        実務補習考査は、実務的な内容を問う形式で出題されます。
                      </p>
                      <ul>
                        <li>計算問題</li>
                        <li>論述問題</li>
                        <li>事例問題</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>第8回考査の対策方法</h3>
                <div className="exam-info-box highlight">
                  <h4>効果的な学習方法</h4>
                  <p>
                    第8回考査に合格するためには、これまでの実務補習の内容を
                    しっかりと復習し、実務的な知識を身につけることが重要です。
                  </p>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>これまでの学習内容の復習</h4>
                      <ul>
                        <li>実務補習で学んだ内容を復習する</li>
                        <li>過去の考査の問題を解き直す</li>
                        <li>実務補習の講義資料を確認する</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>実務的な知識の習得</h4>
                      <ul>
                        <li>実務経験と結びつけて理解する</li>
                        <li>実務的な判断力を養う</li>
                        <li>事例問題に慣れる</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>実務補習考査の重要性</h3>
                <div className="exam-info-box">
                  <h4>修了考査への準備</h4>
                  <p>
                    実務補習考査は、修了考査への準備として重要な役割を果たします。
                    各考査でしっかりと学習することで、修了考査に備えることができます。
                  </p>
                  <div className="flow-box" style={{ marginTop: '20px' }}>
                    <ol className="flow-list">
                      <li>実務補習の開始</li>
                      <li>各回の考査を受験</li>
                      <li>学習内容を確認・復習</li>
                      <li>第8回考査の準備</li>
                      <li>修了考査への準備</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>最新情報について</h3>
                <div className="exam-info-box highlight">
                  <p>
                    実務補習第8回考査の詳細な日程や内容については、
                    実務補習所や日本公認会計士協会の公式サイトで最新情報をご確認ください。
                  </p>
                  <ul style={{ marginTop: '15px' }}>
                    <li>
                      <a href="https://jicpa.or.jp" target="_blank" rel="noopener noreferrer">
                        日本公認会計士協会
                      </a>
                    </li>
                    <li>
                      実務補習所の公式サイト
                    </li>
                  </ul>
                </div>
              </div>

              <div className="detail-section">
                <h3>関連情報</h3>
                <div className="exam-info-box highlight">
                  <h4>監査総合グループ第8回考査問題</h4>
                  <p>
                    実務補習第8回考査の監査総合グループの問題を年度別に確認できます。
                  </p>
                  <div style={{ marginTop: '15px' }}>
                    <Link href="/jissen-hoshu/dai8kai/kansa" style={{ 
                      color: 'var(--primary-color)', 
                      textDecoration: 'none', 
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      監査第8回考査問題一覧を見る →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
                <p style={{ margin: 0 }}>
                  <Link href="/shuryo" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
                    ← 修了考査の詳細ページに戻る
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
          <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            <Link href="/privacy" style={{ color: 'white', textDecoration: 'underline', marginRight: '20px' }}>プライバシーポリシー</Link>
            <Link href="/terms" style={{ color: 'white', textDecoration: 'underline' }}>利用規約</Link>
          </p>
        </div>
      </footer>
    </>
  )
}

