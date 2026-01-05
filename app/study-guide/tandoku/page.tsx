'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function TandokuStudyGuidePage() {
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
          <h1 className="site-title">短答式試験の対策方法</h1>
          <p className="site-subtitle">基礎を徹底的に固めて合格を目指す</p>
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
              <h2>短答式試験の対策方法</h2>
            </div>
            
            <div className="exam-content">
              <div className="guide-section">
                <h3>学習の基本方針</h3>
                <div className="exam-info-box highlight">
                  <h4>基礎を徹底的に固める</h4>
                  <p>
                    短答式試験は基礎的な知識を問う試験です。まずは基本テキストを何度も読み返し、
                    基本的な概念を正確に理解することが重要です。
                  </p>
                  <ul style={{ marginTop: '15px' }}>
                    <li>テキストを3回以上読み返す</li>
                    <li>基本概念を自分の言葉で説明できるようにする</li>
                    <li>専門用語の定義を正確に覚える</li>
                  </ul>
                </div>
              </div>

              <div className="guide-section">
                <h3>過去問の徹底的な演習</h3>
                <div className="subject-detail-grid">
                  <div className="subject-card">
                    <h4>過去問を繰り返し解く</h4>
                    <p>
                      過去問を繰り返し解くことで、出題傾向を把握し、時間配分の感覚を身につけます。
                      特に直近5年分の過去問は必ず解いておきましょう。
                    </p>
                    <ul>
                      <li>1回目：時間を計って解く</li>
                      <li>2回目：間違えた問題を重点的に</li>
                      <li>3回目：全問正解できるまで繰り返す</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>出題傾向の分析</h4>
                    <p>
                      過去問を分析して、よく出る論点を把握します。
                      頻出論点は特に重点的に学習しましょう。
                    </p>
                    <ul>
                      <li>科目ごとの出題傾向を把握</li>
                      <li>頻出論点をリストアップ</li>
                      <li>苦手な論点を重点的に学習</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>科目別の対策</h3>
                <div className="subject-detail-grid">
                  <div className="subject-card">
                    <h4>財務会計論</h4>
                    <p>
                      簿記と財務諸表論から構成されます。計算問題と理論問題の両方に対応できるよう、
                      バランスよく学習します。
                    </p>
                    <ul>
                      <li>仕訳問題を毎日解く</li>
                      <li>会計基準の理論を理解する</li>
                      <li>連結会計の計算をマスターする</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>管理会計論</h4>
                    <p>
                      原価計算を中心とした、企業の内部管理に必要な会計知識が問われます。
                      計算問題が多いため、問題演習を重視します。
                    </p>
                    <ul>
                      <li>原価計算の基礎を徹底的に</li>
                      <li>標準原価計算の問題を繰り返し解く</li>
                      <li>直接原価計算の理解を深める</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>監査論</h4>
                    <p>
                      財務諸表監査の理論と実務についての基礎知識が問われます。
                      監査基準の理解が重要です。
                    </p>
                    <ul>
                      <li>監査基準を読み込む</li>
                      <li>監査手続の流れを理解する</li>
                      <li>過去問で頻出論点を把握</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>企業法</h4>
                    <p>
                      会社法を中心とした企業に関する法律知識が問われます。
                      条文の正確な理解が重要です。
                    </p>
                    <ul>
                      <li>会社法の条文を読む</li>
                      <li>判例を理解する</li>
                      <li>過去問で出題傾向を把握</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>苦手科目を作らない</h3>
                <div className="exam-info-box">
                  <p>
                    各科目で40%以上の得点が必要なため、苦手科目を作らないことが重要です。
                    全科目をバランスよく学習しましょう。
                  </p>
                  <ul style={{ marginTop: '15px' }}>
                    <li>苦手科目は早めに克服する</li>
                    <li>得意科目に偏らない学習計画を立てる</li>
                    <li>定期的に全科目を復習する</li>
                  </ul>
                </div>
              </div>

              <div className="guide-section">
                <h3>学習スケジュールの例</h3>
                <div className="exam-info-box highlight">
                  <h4>基礎期（3～6ヶ月）</h4>
                  <ul>
                    <li>テキストを読み込む</li>
                    <li>基本問題を解く</li>
                    <li>専門用語を覚える</li>
                  </ul>
                  <h4 style={{ marginTop: '20px' }}>応用期（3～6ヶ月）</h4>
                  <ul>
                    <li>過去問を解き始める</li>
                    <li>間違えた問題を復習</li>
                    <li>頻出論点を重点的に学習</li>
                  </ul>
                  <h4 style={{ marginTop: '20px' }}>直前期（1～2ヶ月）</h4>
                  <ul>
                    <li>過去問を繰り返し解く</li>
                    <li>苦手な論点を克服</li>
                    <li>時間配分の練習</li>
                  </ul>
                </div>
              </div>

              <div className="guide-section">
                <h3>時間配分のコツ</h3>
                <div className="exam-info-box">
                  <p>
                    短答式試験は各科目60分、合計240分（4時間）です。
                    時間配分を意識して学習しましょう。
                  </p>
                  <div className="schedule-card" style={{ marginTop: '20px' }}>
                    <div className="schedule-item">
                      <h4>時間配分の目安</h4>
                      <ul>
                        <li>財務会計論：60分</li>
                        <li>管理会計論：60分</li>
                        <li>監査論：60分</li>
                        <li>企業法：60分</li>
                      </ul>
                      <p className="note" style={{ marginTop: '15px' }}>
                        各科目で時間を計って過去問を解く練習をしましょう。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
                <p style={{ margin: 0 }}>
                  <Link href="/tandoku" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
                    ← 短答式試験の詳細ページに戻る
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







