'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Home() {
  const navbarRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // ナビゲーションリンクのスムーススクロール
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]')
    
    const handleNavClick = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const targetId = target.getAttribute('href')
      if (!targetId) return
      
      const targetSection = document.querySelector(targetId)
      if (targetSection) {
        const headerOffset = 100
        const elementPosition = targetSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }

    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick)
    })

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

    // スケジュールカードのホバーエフェクト強化
    const scheduleItems = document.querySelectorAll('.schedule-item')
    scheduleItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        ;(this as HTMLElement).style.transition = 'all 0.3s ease'
      })
    })

    // ページ読み込み時のフェードインアニメーション
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

    // 各セクションにアニメーションを適用
    const sections = document.querySelectorAll('.exam-section, .summary-section, .intro-section')
    sections.forEach(section => {
      ;(section as HTMLElement).style.opacity = '0'
      ;(section as HTMLElement).style.transform = 'translateY(20px)'
      ;(section as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(section)
    })

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick)
      })
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="site-title">公認会計士試験ガイド</h1>
          <p className="site-subtitle">短答式試験・論文式試験・修了考査の完全解説</p>
        </div>
      </header>

      <nav className="navbar" ref={navbarRef}>
        <div className="container">
          <ul className="nav-menu">
            <li><a href="#tandoku">短答式試験</a></li>
            <li><a href="#ronbun">論文式試験</a></li>
            <li><a href="#shuryo">修了考査</a></li>
            <li><a href="#summary">まとめ</a></li>
            <li><Link href="/study-guide">対策方法</Link></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          {/* イントロダクション */}
          <section className="intro-section">
            <h2>公認会計士試験とは</h2>
            <p className="intro-text">
              公認会計士は、企業の財務諸表を監査する専門家として、経済社会において重要な役割を担っています。
              公認会計士になるためには、<strong>短答式試験</strong>、<strong>論文式試験</strong>、そして<strong>修了考査</strong>の3つのステップをクリアする必要があります。
              このサイトでは、それぞれの試験の概要と最新情報を詳しく解説します。
            </p>
          </section>

          {/* 短答式試験 */}
          <article id="tandoku" className="exam-section">
            <div className="exam-header">
              <span className="exam-number">01</span>
              <h2>短答式試験</h2>
            </div>
            
            <div className="exam-content">
              <div className="exam-overview">
                <h3>概要</h3>
                <p>
                  短答式試験は、公認会計士試験の第一関門です。マークシート方式で実施され、
                  基礎的な知識を問う試験となっています。年2回（5月と12月）実施され、
                  合格すると論文式試験の受験資格が得られます。
                </p>
              </div>

              <div className="exam-details">
                <h3>試験科目</h3>
                <ul className="subject-list">
                  <li><strong>財務会計論</strong>：簿記、財務諸表論</li>
                  <li><strong>管理会計論</strong>：原価計算</li>
                  <li><strong>監査論</strong></li>
                  <li><strong>企業法</strong>：会社法ほか</li>
                </ul>
              </div>

              <div className="exam-schedule">
                <h3>最新試験日程（令和8年（2026年））</h3>
                <div className="schedule-card">
                  <div className="schedule-item">
                    <h4>第Ⅰ回短答式試験</h4>
                    <p className="exam-date">試験日：<strong>2025年12月14日</strong></p>
                    <p className="application-period">出願期間：2025年8月29日～9月18日</p>
                  </div>
                  <div className="schedule-item">
                    <h4>第Ⅱ回短答式試験</h4>
                    <p className="exam-date">試験日：<strong>2026年5月24日</strong></p>
                    <p className="application-period">出願期間：2026年2月2日～2月24日</p>
                  </div>
                </div>
              </div>

              <div className="exam-info-box">
                <h3>試験の特徴</h3>
                <ul>
                  <li>マークシート方式で実施</li>
                  <li>基礎的な知識を幅広く問う</li>
                  <li>年2回の受験機会がある</li>
                  <li>合格すると論文式試験の受験資格が得られる</li>
                </ul>
              </div>

              <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
                <p style={{ margin: 0 }}>
                  <Link href="/tandoku" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
                    詳細ページを見る →
                  </Link>
                </p>
              </div>
            </div>
          </article>

          {/* 論文式試験 */}
          <article id="ronbun" className="exam-section">
            <div className="exam-header">
              <span className="exam-number">02</span>
              <h2>論文式試験</h2>
            </div>
            
            <div className="exam-content">
              <div className="exam-overview">
                <h3>概要</h3>
                <p>
                  論文式試験は、短答式試験に合格した者が受験できる試験です。
                  記述式で実施され、より深い理解と応用力が求められます。
                  年1回（8月）実施され、合格率は近年約40%前後で推移しています。
                </p>
              </div>

              <div className="exam-details">
                <h3>試験科目</h3>
                <ul className="subject-list">
                  <li><strong>会計学</strong>：財務会計論、管理会計論</li>
                  <li><strong>監査論</strong></li>
                  <li><strong>企業法</strong></li>
                  <li><strong>租税法</strong></li>
                  <li><strong>選択科目</strong>：経営学、経済学、民法、統計学から1科目選択</li>
                </ul>
              </div>

              <div className="exam-schedule">
                <h3>最新試験日程（令和8年（2026年））</h3>
                <div className="schedule-card">
                  <div className="schedule-item full-width">
                    <h4>論文式試験</h4>
                    <p className="exam-date">試験期日：<strong>2026年8月21日～8月23日</strong></p>
                    <p className="note">※3日間にわたって実施されます</p>
                  </div>
                </div>
              </div>

              <div className="exam-info-box">
                <h3>合格のポイント</h3>
                <ul>
                  <li>合格率は約40%前後</li>
                  <li>合格には平均1,000～1,500時間の勉強が必要</li>
                  <li>記述式のため、論理的な思考力と表現力が重要</li>
                  <li>選択科目は自分の得意分野を選ぶことが重要</li>
                </ul>
              </div>

              <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
                <p style={{ margin: 0 }}>
                  <Link href="/ronbun" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
                    詳細ページを見る →
                  </Link>
                </p>
              </div>
            </div>
          </article>

          {/* 修了考査 */}
          <article id="shuryo" className="exam-section">
            <div className="exam-header">
              <span className="exam-number">03</span>
              <h2>修了考査</h2>
            </div>
            
            <div className="exam-content">
              <div className="exam-overview">
                <h3>概要</h3>
                <p>
                  修了考査は、公認会計士試験（短答式・論文式）に合格した後、
                  実務補習所での実務補習を修了した者が受験する試験です。
                  この試験に合格することで、公認会計士としての登録が可能となり、
                  晴れて公認会計士として活動できるようになります。
                </p>
              </div>

              <div className="exam-details">
                <h3>受験資格</h3>
                <ul className="subject-list">
                  <li>公認会計士試験（短答式・論文式）に合格していること</li>
                  <li>実務補習所での実務補習を修了していること</li>
                  <li>実務経験を積んでいること</li>
                </ul>
              </div>

              <div className="exam-info-box">
                <h3>試験の特徴</h3>
                <ul>
                  <li>実務補習所での学習内容が中心</li>
                  <li>実務的な知識と経験が問われる</li>
                  <li>合格後、公認会計士として登録可能</li>
                  <li>公認会計士になるための最後の関門</li>
                </ul>
              </div>

              <div className="exam-info-box highlight">
                <h3>最新情報について</h3>
                <p>
                  修了考査の詳細な日程や内容については、
                  <a href="https://jicpa.or.jp" target="_blank" rel="noopener noreferrer">日本公認会計士協会の公式サイト</a>
                  で最新情報をご確認ください。
                </p>
              </div>

              <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
                <p style={{ margin: 0 }}>
                  <Link href="/shuryo" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
                    詳細ページを見る →
                  </Link>
                </p>
              </div>
            </div>
          </article>

          {/* まとめ */}
          <section id="summary" className="summary-section">
            <h2>まとめ</h2>
            <div className="summary-content">
              <div className="summary-card">
                <h3>試験の流れ</h3>
                <ol className="flow-list">
                  <li><strong>短答式試験</strong>（年2回）に合格</li>
                  <li><strong>論文式試験</strong>（年1回）に合格</li>
                  <li>実務補習所で実務補習を修了</li>
                  <li><strong>修了考査</strong>に合格</li>
                  <li>公認会計士として登録</li>
                </ol>
              </div>

              <div className="summary-card">
                <h3>重要なポイント</h3>
                <ul>
                  <li>試験制度は変更される可能性があるため、最新情報を常に確認</li>
                  <li>受験申込はオンラインで行われるため、出願期間を逃さないよう注意</li>
                  <li>計画的な学習と継続的な努力が合格への鍵</li>
                  <li>各試験の特徴を理解し、適切な対策を立てる</li>
                </ul>
              </div>
            </div>

            <div className="info-box">
              <h3>最新情報の確認先</h3>
              <ul>
                <li><a href="https://www.fsa.go.jp/cpaaob/kouninkaikeishi-shiken/information.html" target="_blank" rel="noopener noreferrer">公認会計士・監査審査会</a></li>
                <li><a href="https://jicpa.or.jp" target="_blank" rel="noopener noreferrer">日本公認会計士協会</a></li>
              </ul>
            </div>
          </section>
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

