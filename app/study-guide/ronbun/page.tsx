'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function RonbunStudyGuidePage() {
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
          <h1 className="site-title">論文式試験の対策方法</h1>
          <p className="site-subtitle">理論と記述力を鍛えて合格を目指す</p>
        </div>
      </header>

      <nav className="navbar" ref={navbarRef}>
        <div className="container">
          <ul className="nav-menu">
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/tandoku">短答式試験</Link></li>
            <li><Link href="/ronbun">論文式試験</Link></li>
            <li><Link href="/study-guide">対策方法</Link></li>
            <li><Link href="/shuryo">修了考査</Link></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          <article className="exam-section">
            <div className="exam-header">
              <span className="exam-number">02</span>
              <h2>論文式試験の対策方法</h2>
            </div>
            
            <div className="exam-content">
              <div className="guide-section">
                <h3>学習の基本方針</h3>
                <div className="exam-info-box highlight">
                  <h4>理論の理解を深める</h4>
                  <p>
                    論文式試験では、理論的な理解が重要です。なぜその会計処理をするのか、
                    その根拠は何かを理解することが求められます。
                  </p>
                  <ul style={{ marginTop: '15px' }}>
                    <li>会計基準の理論的背景を理解する</li>
                    <li>なぜその処理をするのかを説明できるようにする</li>
                    <li>理論と実務のつながりを理解する</li>
                  </ul>
                </div>
              </div>

              <div className="guide-section">
                <h3>記述力を鍛える</h3>
                <div className="subject-detail-grid">
                  <div className="subject-card">
                    <h4>論理的な文章構成</h4>
                    <p>
                      知識があっても、それを文章で表現できなければ得点になりません。
                      論理的に説明する練習を積み重ねましょう。
                    </p>
                    <ul>
                      <li>結論→理由→具体例の順で書く</li>
                      <li>接続詞を適切に使う</li>
                      <li>専門用語を正確に使う</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>過去問の答案練習</h4>
                    <p>
                      過去問を解きながら、実際に答案を書く練習をします。
                      書いた答案を添削してもらうことが重要です。
                    </p>
                    <ul>
                      <li>時間を計って答案を書く</li>
                      <li>答案を添削してもらう</li>
                      <li>模範解答と比較する</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>時間配分を意識する</h3>
                <div className="exam-info-box">
                  <p>
                    各科目3時間という限られた時間の中で、すべての問題に取り組む必要があります。
                    過去問演習を通じて、適切な時間配分を身につけましょう。
                  </p>
                  <div className="schedule-card" style={{ marginTop: '20px' }}>
                    <div className="schedule-item">
                      <h4>時間配分の例（3時間）</h4>
                      <ul>
                        <li>問題を読む：10分</li>
                        <li>答案構成：20分</li>
                        <li>答案作成：2時間20分</li>
                        <li>見直し：10分</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>科目別の対策</h3>
                <div className="subject-detail-grid">
                  <div className="subject-card">
                    <h4>会計学</h4>
                    <p>
                      財務会計論と管理会計論から構成されます。計算問題と論述問題の両方に対応できるよう、
                      バランスよく学習します。
                    </p>
                    <ul>
                      <li>会計基準を深く理解する</li>
                      <li>計算問題を正確に解く</li>
                      <li>論述問題の答案練習</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>監査論</h4>
                    <p>
                      監査の理論と実務について、より深い理解が求められます。
                      監査基準の理解と実務との結びつけが重要です。
                    </p>
                    <ul>
                      <li>監査基準を読み込む</li>
                      <li>監査実務の流れを理解する</li>
                      <li>論述問題の答案練習</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>企業法</h4>
                    <p>
                      会社法を中心に、より詳細な法律知識が問われます。
                      条文の正確な理解と判例の理解が重要です。
                    </p>
                    <ul>
                      <li>会社法の条文を読む</li>
                      <li>判例を理解する</li>
                      <li>論述問題の答案練習</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>租税法</h4>
                    <p>
                      法人税法と所得税法を中心とした税務知識が問われます。
                      計算問題と論述問題の両方に対応する必要があります。
                    </p>
                    <ul>
                      <li>税法の条文を理解する</li>
                      <li>計算問題を繰り返し解く</li>
                      <li>論述問題の答案練習</li>
                    </ul>
                  </div>
                  <div className="subject-card full-width">
                    <h4>選択科目</h4>
                    <p>
                      経営学、経済学、民法、統計学から1科目を選択します。
                      早めに決めて、集中的に学習することが重要です。
                    </p>
                    <div className="choice-subjects">
                      <div>
                        <strong>経営学</strong>
                        <p>経営戦略、組織論、マーケティングなど。実務との関連が深い。</p>
                      </div>
                      <div>
                        <strong>経済学</strong>
                        <p>ミクロ経済学、マクロ経済学など。理論的な理解が重要。</p>
                      </div>
                      <div>
                        <strong>民法</strong>
                        <p>契約法、不法行為法、物権法など。条文の理解が重要。</p>
                      </div>
                      <div>
                        <strong>統計学</strong>
                        <p>確率論、統計的推測、回帰分析など。計算問題が多い。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>学習スケジュールの例</h3>
                <div className="exam-info-box highlight">
                  <h4>基礎期（6～12ヶ月）</h4>
                  <ul>
                    <li>理論を深く理解する</li>
                    <li>基本問題を解く</li>
                    <li>答案を書く練習を始める</li>
                  </ul>
                  <h4 style={{ marginTop: '20px' }}>応用期（6～12ヶ月）</h4>
                  <ul>
                    <li>過去問を解き始める</li>
                    <li>答案を添削してもらう</li>
                    <li>時間配分の練習</li>
                  </ul>
                  <h4 style={{ marginTop: '20px' }}>直前期（2～3ヶ月）</h4>
                  <ul>
                    <li>過去問を繰り返し解く</li>
                    <li>答案の質を向上させる</li>
                    <li>時間配分を完璧にする</li>
                  </ul>
                </div>
              </div>

              <div className="guide-section">
                <h3>答案作成のポイント</h3>
                <div className="exam-info-box">
                  <h4>答案構成の重要性</h4>
                  <p>
                    答案を作成する前に、答案構成をしっかり行うことが重要です。
                    構成を考えることで、論理的な答案を書くことができます。
                  </p>
                  <ul style={{ marginTop: '15px' }}>
                    <li>問題文を正確に読む</li>
                    <li>問われていることを明確にする</li>
                    <li>答案の構成を考える</li>
                    <li>時間配分を意識する</li>
                  </ul>
                </div>
              </div>

              <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
                <p style={{ margin: 0 }}>
                  <Link href="/ronbun" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
                    ← 論文式試験の詳細ページに戻る
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






