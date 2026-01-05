'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function TandokuPage() {
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
          <h1 className="site-title">短答式試験 詳細ガイド</h1>
          <p className="site-subtitle">公認会計士試験の第一関門を徹底解説</p>
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
              <span className="exam-number">01</span>
              <h2>短答式試験とは</h2>
            </div>
            
            <div className="exam-content">
              <div className="exam-overview">
                <h3>概要</h3>
                <p>
                  短答式試験は、公認会計士試験の第一関門です。マークシート方式で実施され、
                  基礎的な知識を問う試験となっています。年2回（5月と12月）実施され、
                  合格すると論文式試験の受験資格が得られます。
                </p>
                <p>
                  この試験は、公認会計士として必要な基礎知識を幅広く問うもので、
                  合格率は近年約10～15%前後で推移しています。基礎をしっかりと固めることが
                  合格への鍵となります。
                </p>
              </div>

              <div className="detail-section">
                <h3>試験科目の詳細</h3>
                <div className="subject-detail-grid">
                  <div className="subject-card">
                    <h4>財務会計論</h4>
                    <p>簿記と財務諸表論から構成されます。企業の財務状況を正確に記録・報告するための知識が問われます。</p>
                    <ul>
                      <li>簿記：仕訳、決算整理、連結会計など</li>
                      <li>財務諸表論：会計基準、財務諸表の作成など</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>管理会計論</h4>
                    <p>原価計算を中心とした、企業の内部管理に必要な会計知識が問われます。</p>
                    <ul>
                      <li>原価計算の基礎</li>
                      <li>標準原価計算</li>
                      <li>直接原価計算</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>監査論</h4>
                    <p>財務諸表監査の理論と実務についての基礎知識が問われます。</p>
                    <ul>
                      <li>監査の目的と意義</li>
                      <li>監査基準</li>
                      <li>監査手続</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>企業法</h4>
                    <p>会社法を中心とした企業に関する法律知識が問われます。</p>
                    <ul>
                      <li>会社法の基礎</li>
                      <li>株式会社の機関</li>
                      <li>企業組織再編</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="exam-schedule">
                <h3>最新試験日程（令和8年（2026年））</h3>
                <div className="schedule-card">
                  <div className="schedule-item">
                    <h4>第Ⅰ回短答式試験</h4>
                    <p className="exam-date">試験日：<strong>2025年12月14日（日）</strong></p>
                    <p className="application-period">出願期間：2025年8月29日（金）～9月18日（木）</p>
                    <p className="note">※出願はオンラインで行います</p>
                  </div>
                  <div className="schedule-item">
                    <h4>第Ⅱ回短答式試験</h4>
                    <p className="exam-date">試験日：<strong>2026年5月24日（日）</strong></p>
                    <p className="application-period">出願期間：2026年2月2日（月）～2月24日（火）</p>
                    <p className="note">※出願はオンラインで行います</p>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>試験の実施方法</h3>
                <div className="exam-info-box">
                  <ul>
                    <li><strong>試験方式</strong>：マークシート方式（4肢択一式）</li>
                    <li><strong>試験時間</strong>：各科目60分、合計240分（4時間）</li>
                    <li><strong>配点</strong>：各科目25点満点、合計100点満点</li>
                    <li><strong>合格基準</strong>：総得点が52点以上、かつ各科目が40%以上</li>
                    <li><strong>試験会場</strong>：全国主要都市で実施</li>
                  </ul>
                </div>
              </div>

              <div className="detail-section">
                <h3>合格のための学習ポイント</h3>
                <div className="exam-info-box highlight">
                  <h4>基礎を徹底的に</h4>
                  <p>
                    短答式試験は基礎的な知識を問う試験です。テキストを何度も読み返し、
                    基本的な概念を正確に理解することが重要です。
                  </p>
                </div>
                <div className="exam-info-box highlight">
                  <h4>過去問を徹底的に</h4>
                  <p>
                    過去問を繰り返し解くことで、出題傾向を把握し、時間配分の感覚を身につけましょう。
                    特に直近5年分の過去問は必ず解いておくことをおすすめします。
                  </p>
                </div>
                <div className="exam-info-box highlight">
                  <h4>苦手科目を作らない</h4>
                  <p>
                    各科目で40%以上の得点が必要なため、苦手科目を作らないことが重要です。
                    全科目をバランスよく学習しましょう。
                  </p>
                </div>
              </div>

              <div className="detail-section">
                <h3>合格後の流れ</h3>
                <div className="flow-box">
                  <ol className="flow-list">
                    <li>短答式試験に合格</li>
                    <li>論文式試験の受験資格を取得</li>
                    <li>論文式試験の出願（合格後2年間有効）</li>
                    <li>論文式試験の準備を開始</li>
                  </ol>
                </div>
              </div>

              <div className="exam-info-box">
                <h3>最新情報の確認先</h3>
                <ul>
                  <li>
                    <a href="https://www.fsa.go.jp/cpaaob/kouninkaikeishi-shiken/information.html" target="_blank" rel="noopener noreferrer">
                      公認会計士・監査審査会 - 試験情報
                    </a>
                  </li>
                  <li>
                    <a href="https://jicpa.or.jp" target="_blank" rel="noopener noreferrer">
                      日本公認会計士協会
                    </a>
                  </li>
                </ul>
              </div>

              <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
                <p style={{ margin: 0 }}>
                  <Link href="/study-guide/tandoku" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
                    効果的な対策方法の詳細を見る →
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

