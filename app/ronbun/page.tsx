'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function RonbunPage() {
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
          <h1 className="site-title">論文式試験 詳細ガイド</h1>
          <p className="site-subtitle">公認会計士試験の核心を徹底解説</p>
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
              <span className="exam-number">02</span>
              <h2>論文式試験とは</h2>
            </div>
            
            <div className="exam-content">
              <div className="exam-overview">
                <h3>概要</h3>
                <p>
                  論文式試験は、短答式試験に合格した者が受験できる試験です。
                  記述式で実施され、より深い理解と応用力が求められます。
                  年1回（8月）実施され、合格率は近年約40%前後で推移しています。
                </p>
                <p>
                  この試験では、単なる知識の暗記ではなく、理論的な理解と
                  それを文章で表現する能力が問われます。合格には平均1,000～1,500時間の
                  勉強が必要とされています。
                </p>
              </div>

              <div className="detail-section">
                <h3>試験科目の詳細</h3>
                <div className="subject-detail-grid">
                  <div className="subject-card">
                    <h4>会計学</h4>
                    <p>財務会計論と管理会計論から構成されます。より深い会計知識と応用力が問われます。</p>
                    <ul>
                      <li>財務会計論：会計基準の詳細、連結会計、外貨換算など</li>
                      <li>管理会計論：原価計算の応用、意思決定会計など</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>監査論</h4>
                    <p>監査の理論と実務について、より深い理解が求められます。</p>
                    <ul>
                      <li>監査基準と監査実務</li>
                      <li>内部統制の評価</li>
                      <li>監査報告書の作成</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>企業法</h4>
                    <p>会社法を中心に、より詳細な法律知識が問われます。</p>
                    <ul>
                      <li>株式会社の機関設計</li>
                      <li>企業組織再編</li>
                      <li>金融商品取引法</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>租税法</h4>
                    <p>法人税法と所得税法を中心とした税務知識が問われます。</p>
                    <ul>
                      <li>法人税法の基礎</li>
                      <li>所得税法の基礎</li>
                      <li>税務会計</li>
                    </ul>
                  </div>
                  <div className="subject-card full-width">
                    <h4>選択科目</h4>
                    <p>以下の4科目から1科目を選択します。自分の得意分野や将来のキャリアを考慮して選択しましょう。</p>
                    <div className="choice-subjects">
                      <div>
                        <strong>経営学</strong>
                        <p>経営戦略、組織論、マーケティングなど</p>
                      </div>
                      <div>
                        <strong>経済学</strong>
                        <p>ミクロ経済学、マクロ経済学など</p>
                      </div>
                      <div>
                        <strong>民法</strong>
                        <p>契約法、不法行為法、物権法など</p>
                      </div>
                      <div>
                        <strong>統計学</strong>
                        <p>確率論、統計的推測、回帰分析など</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="exam-schedule">
                <h3>最新試験日程（令和8年（2026年））</h3>
                <div className="schedule-card">
                  <div className="schedule-item full-width">
                    <h4>論文式試験</h4>
                    <p className="exam-date">試験期日：<strong>2026年8月21日（金）～8月23日（日）</strong></p>
                    <p className="note">※3日間にわたって実施されます</p>
                    <div className="schedule-detail">
                      <p><strong>1日目</strong>：会計学（財務会計論・管理会計論）</p>
                      <p><strong>2日目</strong>：監査論、企業法、租税法</p>
                      <p><strong>3日目</strong>：選択科目</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>試験の実施方法</h3>
                <div className="exam-info-box">
                  <ul>
                    <li><strong>試験方式</strong>：記述式（論述問題）</li>
                    <li><strong>試験時間</strong>：各科目3時間</li>
                    <li><strong>配点</strong>：各科目100点満点、合計500点満点</li>
                    <li><strong>合格基準</strong>：総得点が350点以上、かつ各科目が40%以上</li>
                    <li><strong>試験会場</strong>：全国主要都市で実施</li>
                  </ul>
                </div>
              </div>

              <div className="detail-section">
                <h3>合格のための学習ポイント</h3>
                <div className="exam-info-box highlight">
                  <h4>理論の理解を深める</h4>
                  <p>
                    論文式試験では、理論的な理解が重要です。なぜその会計処理をするのか、
                    その根拠は何かを理解することが求められます。
                  </p>
                </div>
                <div className="exam-info-box highlight">
                  <h4>記述力を鍛える</h4>
                  <p>
                    知識があっても、それを文章で表現できなければ得点になりません。
                    過去問を解きながら、論理的に説明する練習を積み重ねましょう。
                  </p>
                </div>
                <div className="exam-info-box highlight">
                  <h4>時間配分を意識する</h4>
                  <p>
                    各科目3時間という限られた時間の中で、すべての問題に取り組む必要があります。
                    過去問演習を通じて、適切な時間配分を身につけましょう。
                  </p>
                </div>
                <div className="exam-info-box highlight">
                  <h4>選択科目は早めに決める</h4>
                  <p>
                    選択科目は早めに決めて、集中的に学習することが重要です。
                    自分の得意分野や将来のキャリアを考慮して選択しましょう。
                  </p>
                </div>
              </div>

              <div className="detail-section">
                <h3>合格後の流れ</h3>
                <div className="flow-box">
                  <ol className="flow-list">
                    <li>論文式試験に合格</li>
                    <li>公認会計士試験合格証の交付</li>
                    <li>実務補習所への入所</li>
                    <li>実務補習の開始（約2年間）</li>
                    <li>修了考査の準備</li>
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
                  <Link href="/study-guide/ronbun" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
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

