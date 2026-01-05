'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function StudyGuidePage() {
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

    const sections = document.querySelectorAll('.exam-section, .guide-card')
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
          <h1 className="site-title">効果的な対策方法ガイド</h1>
          <p className="site-subtitle">公認会計士試験合格への実践的な学習戦略</p>
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
          {/* イントロダクション */}
          <section className="intro-section">
            <h2>公認会計士試験の効果的な対策方法</h2>
            <p className="intro-text">
              公認会計士試験に合格するためには、各試験の特徴を理解し、適切な学習戦略を立てることが重要です。
              各試験の対策方法を詳しく解説したページをご用意しています。
              ご自身が受験する試験の対策方法を確認してください。
            </p>
          </section>

          {/* 各試験の対策ページへのリンク */}
          <div className="summary-content" style={{ marginTop: '40px' }}>
            <article className="guide-card exam-section">
              <div className="exam-header">
                <span className="exam-number">01</span>
                <h2>短答式試験の対策方法</h2>
              </div>
              <div className="exam-content">
                <p>
                  短答式試験は基礎的な知識を問う試験です。基礎を徹底的に固め、
                  過去問を繰り返し解くことで合格に近づけます。
                </p>
                <div className="exam-info-box highlight" style={{ marginTop: '20px' }}>
                  <Link href="/study-guide/tandoku" style={{ 
                    color: 'var(--primary-color)', 
                    textDecoration: 'none', 
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    display: 'inline-block'
                  }}>
                    詳細な対策方法を見る →
                  </Link>
                </div>
              </div>
            </article>

            <article className="guide-card exam-section">
              <div className="exam-header">
                <span className="exam-number">02</span>
                <h2>論文式試験の対策方法</h2>
              </div>
              <div className="exam-content">
                <p>
                  論文式試験では、理論的な理解と記述力が重要です。
                  過去問の答案練習を通じて、論理的に説明する力を身につけましょう。
                </p>
                <div className="exam-info-box highlight" style={{ marginTop: '20px' }}>
                  <Link href="/study-guide/ronbun" style={{ 
                    color: 'var(--primary-color)', 
                    textDecoration: 'none', 
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    display: 'inline-block'
                  }}>
                    詳細な対策方法を見る →
                  </Link>
                </div>
              </div>
            </article>

            <article className="guide-card exam-section">
              <div className="exam-header">
                <span className="exam-number">03</span>
                <h2>修了考査の対策方法</h2>
              </div>
              <div className="exam-content">
                <p>
                  修了考査は実務的な理解を問う試験です。実務経験と結びつけながら、
                  過去問演習と論述練習を繰り返すことが重要です。
                </p>
                <div className="exam-info-box highlight" style={{ marginTop: '20px' }}>
                  <Link href="/study-guide/shuryo" style={{ 
                    color: 'var(--primary-color)', 
                    textDecoration: 'none', 
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    display: 'inline-block'
                  }}>
                    詳細な対策方法を見る →
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* 共通の学習戦略 */}
          <section className="summary-section" style={{ marginTop: '50px' }}>
            <h2>共通の学習戦略</h2>
            <div className="summary-content">
              <div className="summary-card">
                <h3>学習計画の立て方</h3>
                <ul>
                  <li>長期計画と短期計画を立てる</li>
                  <li>週単位・月単位で目標を設定</li>
                  <li>定期的に計画を見直す</li>
                  <li>無理のない計画を立てる</li>
                </ul>
              </div>
              <div className="summary-card">
                <h3>モチベーションの維持</h3>
                <ul>
                  <li>小さな目標を設定して達成感を得る</li>
                  <li>同じ目標を持つ仲間と交流する</li>
                  <li>定期的に休憩を取る</li>
                  <li>合格後の自分をイメージする</li>
                </ul>
              </div>
              <div className="summary-card">
                <h3>効率的な学習方法</h3>
                <ul>
                  <li>集中できる環境を作る</li>
                  <li>時間を区切って学習する</li>
                  <li>復習を重視する</li>
                  <li>アウトプットを重視する</li>
                </ul>
              </div>
            </div>
          </section>
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
