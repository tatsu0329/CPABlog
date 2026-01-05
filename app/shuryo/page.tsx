'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function ShuryoPage() {
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
          <h1 className="site-title">修了考査 詳細ガイド</h1>
          <p className="site-subtitle">公認会計士になるための最後の関門</p>
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
              <span className="exam-number">03</span>
              <h2>修了考査とは</h2>
            </div>
            
            <div className="exam-content">
              <div className="exam-overview">
                <h3>概要</h3>
                <p>
                  修了考査は、<strong>公認会計士資格を正式に取得するための最後の試験</strong>であり、
                  国家試験（短答式・論文式）合格後に受けます。
                </p>
                <div className="exam-info-box highlight" style={{ marginTop: '20px' }}>
                  <h4>修了考査の特徴</h4>
                  <ul>
                    <li>実務補習の総合的な理解と実務能力を確認する試験です</li>
                    <li>計算・論述（記述、選択問題含む）を含めた筆記形式で実施されます</li>
                    <li>実務に基づいた内容が出題され、単純な暗記だけでは対応しにくい構成です</li>
                  </ul>
                  <p style={{ marginTop: '15px', fontWeight: '600', color: 'var(--primary-color)' }}>
                    👉 これは単なる理論試験ではなく、「実際の実務に即した判断・記述力」を問われる試験です。
                  </p>
                </div>
              </div>

              <div className="detail-section">
                <h3>試験の位置づけ・受験資格</h3>
                <div className="exam-info-box">
                  <h4>修了考査を受けるための条件</h4>
                  <ol style={{ paddingLeft: '20px', marginTop: '15px' }}>
                    <li style={{ marginBottom: '10px'}}><strong>公認会計士試験（短答式・論文式）の合格</strong></li>
                    <li style={{ marginBottom: '10px'}}><strong>実務補習（一定時間の実務研修）を修了</strong></li>
                  </ol>
                  <p style={{ marginTop: '15px', fontWeight: '600' }}>
                    これらを満たして初めて修了考査を受験できます。
                  </p>
                  <p className="note-text" style={{ marginTop: '15px' }}>
                    ※公表情報では、受験の詳細・実施日程が毎年更新されています
                  </p>
                </div>
              </div>

              <div className="detail-section">
                <h3>実務補習について</h3>
                <div className="exam-info-box highlight">
                  <h4>実務補習の内容</h4>
                  <p>
                    実務補習では、以下のような内容を学習します：
                  </p>
                  <ul>
                    <li>監査実務の基礎と応用</li>
                    <li>会計実務の基礎と応用</li>
                    <li>実務補習所での講義と演習</li>
                    <li>実務経験の積み重ね</li>
                  </ul>
                </div>
                <div className="exam-info-box highlight">
                  <h4>実務補習所について</h4>
                  <p>
                    実務補習所は、日本公認会計士協会が指定する機関で、
                    公認会計士試験合格者に対して実務補習を提供します。
                    全国に複数の実務補習所があり、地域によって異なる場合があります。
                  </p>
                </div>
              </div>

              <div className="detail-section">
                <h3>試験日程・概要（最新）</h3>
                <div className="exam-info-box">
                  <ul>
                    <li>修了考査の年間日程などの公式情報は日本公認会計士協会が発表しています</li>
                    <li>令和7年度（2025年度）の実施日程も公式で公開案内があります</li>
                  </ul>
                </div>
                <p className="note-text">
                  ※具体的な実施場所や時間割は年度ごとに異なりますので、協会公式サイトで必ず確認してください。
                </p>
              </div>

              <div className="detail-section">
                <h3>出題形式・傾向</h3>
                <div className="exam-info-box highlight">
                  <h4>修了考査は次のような形式・傾向です：</h4>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>✔ 計算</h4>
                      <p>実務的な数値処理が問われます。会計上の見積り、連結処理など実務論点が多いです。</p>
                    </div>
                    <div className="subject-card">
                      <h4>✔ 論述</h4>
                      <p>重要論点の深掘りが求められます。実務での判断力を文章で表現する能力が重要です。</p>
                    </div>
                    <div className="subject-card">
                      <h4>✔ 事例問題</h4>
                      <p>事例的な文章理解・回答が求められます。実務経験が活きる内容です。</p>
                    </div>
                  </div>
                  <p style={{ marginTop: '20px', fontWeight: '600' }}>
                    これらがバランス良く出題され、実務での判断力が重視されます。
                  </p>
                  <p className="note-text" style={{ marginTop: '15px' }}>
                    過去受験者の感想でも、会計上の見積り・リスク・連結処理など実務論点が多いという意見があり、
                    実務経験が活きる内容です。
                  </p>
                </div>
              </div>

              <div className="detail-section">
                <h3>過去問の入手（公式）</h3>
                <div className="exam-info-box">
                  <p>
                    日本公認会計士協会の公式サイトでは、過去の修了考査の試験問題と答案用紙がPDFで無料公開されています。
                  </p>
                  <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'white', borderRadius: '6px' }}>
                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>例：</h4>
                    <ul>
                      <li>令和6年度（2024年度）修了考査試験問題・答案用紙</li>
                      <li>令和5年度・令和4年度…</li>
                    </ul>
                    <p style={{ marginTop: '15px', fontWeight: '600', color: 'var(--primary-color)' }}>
                      → 9年分以上の過去問が公式で参照できます。
                    </p>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>過去問の活用方法（効率的な使い方）</h3>
                <div className="exam-info-box highlight">
                  <div className="subject-card" style={{ marginBottom: '20px' }}>
                    <h4>✔ 出題趣旨を徹底理解する</h4>
                    <p>
                      ただ答えを覚えるだけでなく、出題者の意図（出題趣旨）をしっかり読むことが肝心です。
                    </p>
                  </div>
                  <div className="subject-card" style={{ marginBottom: '20px' }}>
                    <h4>✔ 実務経験と結びつける</h4>
                    <p>
                      修了考査は「実務的な理解」を問うため、実務補習や実際の会計実務の経験と結びつけながら
                      問題を解くと理解が深まります。
                    </p>
                  </div>
                  <div className="subject-card">
                    <h4>✔ 分析記事・傾向分析を活用</h4>
                    <p>
                      修了考査の過去問分析を行っているオンライン記事もあります。9年分以上の出題傾向を分析しているものもあり、
                      復習計画を立てる際に役立ちます。
                    </p>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>効果的な対策方法</h3>
                <div className="subject-detail-grid">
                  <div className="subject-card">
                    <h4>📌 ① 過去問演習</h4>
                    <ul>
                      <li>過去問題を何度も解く</li>
                      <li>自分で解説や出題趣旨をまとめる</li>
                    </ul>
                    <p style={{ marginTop: '10px', fontWeight: '600', color: 'var(--primary-color)' }}>
                      ➡ 実務的な回答・論述の"型"を体得するのに最適。
                    </p>
                  </div>
                  <div className="subject-card">
                    <h4>📌 ② 実務の現場での知識再構築</h4>
                    <p>
                      実務補習・現場経験で学んだ知識を常に意識しながら問題を考えると、
                      論述力が格段に上がります。
                    </p>
                  </div>
                  <div className="subject-card">
                    <h4>📌 ③ 補習所・講座の活用</h4>
                    <p>
                      専門予備校では修了考査向けの教材・答練・解説講座があり、
                      受験対策を体系的にできます。
                    </p>
                  </div>
                  <div className="subject-card">
                    <h4>📌 ④ 論述練習の反復</h4>
                    <p>
                      論述問題は慣れが必要です。書いた答案に対して、
                      何が問われているか、どのように回答すべきかを意識しながら
                      丁寧に解答を作る練習をします。
                    </p>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>勉強法 Tips（合格者の経験談）</h3>
                <div className="exam-info-box highlight">
                  <p>
                    合格者・修了考査受験者の多くは次のような勉強法を実践しています：
                  </p>
                  <div className="tips-grid" style={{ marginTop: '20px', display: 'grid', gap: '15px' }}>
                    <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '2px solid var(--primary-color)' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>🟡 計算問題は一通り解き方を身につける</strong>
                    </div>
                    <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '2px solid var(--primary-color)' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>🟡 実務論点は過去問中心に確認</strong>
                    </div>
                    <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '2px solid var(--primary-color)' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>🟡 実務中の体験や現場判断を文章化する練習をする</strong>
                    </div>
                    <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '2px solid var(--primary-color)' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>🟡 過去問分析をして出題テーマの傾向を理解する</strong>
                    </div>
                  </div>
                  <p style={{ marginTop: '20px', fontWeight: '600', fontSize: '1.1rem' }}>
                    こうした戦略的な学習が"合格率を上げる鍵"になります。
                  </p>
                </div>
              </div>

              <div className="detail-section">
                <h3>合格後の流れ</h3>
                <div className="flow-box">
                  <ol className="flow-list">
                    <li>修了考査に合格</li>
                    <li>公認会計士としての登録申請</li>
                    <li>公認会計士名簿への登録</li>
                    <li>公認会計士としての活動開始</li>
                    <li>継続的な研修とスキルアップ</li>
                  </ol>
                </div>
              </div>

              <div className="detail-section">
                <h3>公認会計士としての活動</h3>
                <div className="exam-info-box highlight">
                  <h4>主な業務領域</h4>
                  <ul>
                    <li><strong>監査業務</strong>：財務諸表監査、内部統制監査など</li>
                    <li><strong>会計業務</strong>：財務諸表の作成、会計コンサルティングなど</li>
                    <li><strong>税務業務</strong>：税務申告、税務コンサルティングなど</li>
                    <li><strong>その他</strong>：M&A支援、経営コンサルティングなど</li>
                  </ul>
                </div>
              </div>

              <div className="exam-info-box highlight">
                <h3>最新情報について</h3>
                <p>
                  修了考査の詳細な日程や内容については、
                  <a href="https://jicpa.or.jp" target="_blank" rel="noopener noreferrer">日本公認会計士協会の公式サイト</a>
                  で最新情報をご確認ください。実務補習所に関する情報も同サイトで確認できます。
                </p>
              </div>

              <div className="exam-info-box">
                <h3>関連情報の確認先</h3>
                <ul>
                  <li>
                    <a href="https://jicpa.or.jp" target="_blank" rel="noopener noreferrer">
                      日本公認会計士協会
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fsa.go.jp/cpaaob/kouninkaikeishi-shiken/information.html" target="_blank" rel="noopener noreferrer">
                      公認会計士・監査審査会
                    </a>
                  </li>
                </ul>
              </div>

              <div className="detail-section">
                <h3>関連情報</h3>
                <div className="exam-info-box highlight">
                  <h4>実務補習第8回考査</h4>
                  <p>
                    実務補習の過程で実施される第8回考査についての情報です。
                    修了考査への準備として重要な考査となります。
                  </p>
                  <div style={{ marginTop: '15px' }}>
                    <Link href="/jissen-hoshu/dai8kai" style={{ 
                      color: 'var(--primary-color)', 
                      textDecoration: 'none', 
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      実務補習第8回考査の詳細を見る →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
                <p style={{ margin: 0 }}>
                  <Link href="/study-guide/shuryo" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
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

