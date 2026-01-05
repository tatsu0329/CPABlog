'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function ShuryoStudyGuidePage() {
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
          <h1 className="site-title">修了考査の対策方法</h1>
          <p className="site-subtitle">実務経験と結びつけて合格を目指す</p>
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
              <h2>修了考査の対策方法</h2>
            </div>
            
            <div className="exam-content">
              <div className="guide-section">
                <h3>学習の基本方針</h3>
                <div className="exam-info-box highlight">
                  <h4>実務経験と結びつける</h4>
                  <p>
                    修了考査は「実務的な理解」を問うため、実務補習や実際の会計実務の経験と結びつけながら
                    問題を解くと理解が深まります。
                  </p>
                  <ul style={{ marginTop: '15px' }}>
                    <li>実務補習で学んだ内容を復習する</li>
                    <li>実務経験と理論を結びつける</li>
                    <li>実務的な判断力を養う</li>
                  </ul>
                </div>
              </div>

              <div className="guide-section">
                <h3>答練（演習）中心の学習サイクル</h3>
                <div className="exam-info-box highlight">
                  <h4>答練を反復して回す</h4>
                  <p>
                    修了考査対策で重要なのは、答練（予備校や自習用の演習）を反復して回すことです。
                    初回はじっくり解き、2〜3周することで時間配分や解法パターンが身につきます。
                  </p>
                  <ul style={{ marginTop: '15px' }}>
                    <li>初回はじっくり解く</li>
                    <li>2〜3周することで時間配分や解法パターンが身につく</li>
                    <li>特に計算は電卓でしっかり解く</li>
                    <li>理論は頭で要点を整理しながら解く練習をする</li>
                  </ul>
                  <p style={{ marginTop: '15px', fontWeight: '600' }}>
                    答練の良いところは、本番より量が多め・難しめで、対応力が自然と上がる点です。
                    これを繰り返すことで実戦力が養われます。
                  </p>
                </div>
              </div>

              <div className="guide-section">
                <h3>答練を"ペースメーカー"として使う</h3>
                <div className="exam-info-box">
                  <p>
                    独学でも可能ですが、予備校の答練を学習ペースの基準として使うことで、
                    計画的に勉強が進みやすくなります。
                  </p>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>答練の活用方法</h4>
                      <ul>
                        <li>答練のスケジュールをゴールに設定</li>
                        <li>次の学習範囲の明確化</li>
                        <li>「何をやるべきか悩む時間」を減らせる</li>
                        <li>量が多いので苦手論点の洗い出しにも効果的</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>注意点</h4>
                      <p>
                        予備校の問題が必ずしも本番と同じ傾向とは限らないので、
                        過去問との比較で重要論点を見極めることも大切です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>過去問を徹底的に分析・活用する</h3>
                <div className="exam-info-box highlight">
                  <h4>出題傾向の把握</h4>
                  <p>
                    修了考査の出題傾向は実務寄りで、論点も広範囲です。
                    過去問を単に解くだけでなく、以下のサイクルを回すと得点力が格段に上がります。
                  </p>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>傾向分析</h4>
                      <ul>
                        <li>出題パターンの把握</li>
                        <li>頻出テーマを重点的に対策</li>
                        <li>過去問の論点をまとめて体系化</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>頻出テーマ</h4>
                      <ul>
                        <li>連結会計</li>
                        <li>IFRS関連</li>
                        <li>構造論点</li>
                      </ul>
                    </div>
                  </div>
                  <p style={{ marginTop: '20px', fontWeight: '600' }}>
                    「傾向分析 → 演習 → 復習」のサイクルを回すことが重要です。
                  </p>
                  <p className="note-text" style={{ marginTop: '15px' }}>
                    実務であまり触れない分野（IFRSや複雑な論点）は早めに基礎から固めると安心です。
                  </p>
                  <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '2px solid var(--primary-color)' }}>
                    <Link href="/study-guide/shuryo/past-exam-analysis" style={{ 
                      color: 'var(--primary-color)', 
                      textDecoration: 'none', 
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      📊 過去問分析の詳細な方法を見る →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>論述練習の反復</h3>
                <div className="exam-info-box">
                  <p>
                    論述問題は慣れが必要です。書いた答案に対して、
                    何が問われているか、どのように回答すべきかを意識しながら
                    丁寧に解答を作る練習をします。
                  </p>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>論述のポイント</h4>
                      <ul>
                        <li>実務的な視点で回答する</li>
                        <li>具体例を挙げる</li>
                        <li>判断の根拠を明確にする</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>練習方法</h4>
                      <ul>
                        <li>時間を計って答案を書く</li>
                        <li>答案を添削してもらう</li>
                        <li>模範解答と比較する</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>計算力・電卓操作は"実務感覚"で鍛える</h3>
                <div className="exam-info-box highlight">
                  <h4>電卓操作で瞬時に対応できる力を養う</h4>
                  <p>
                    修了考査は実務を前提とした計算が多く出題されます。
                    実務ではExcelやシステムで処理することが多いですが、
                    試験では電卓操作で瞬時に対応できる力が必要です。
                  </p>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>電卓での計算演習</h4>
                      <ul>
                        <li>電卓での計算演習を頻繁に行う</li>
                        <li>実務時と同じ手順で計算練習をする</li>
                        <li>計算問題は一通り解き方を身につける</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>実務的な計算問題</h4>
                      <ul>
                        <li>会計上の見積り</li>
                        <li>連結処理</li>
                        <li>実務論点が多い計算問題</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>模擬試験で「本番の戦略」を体得する</h3>
                <div className="exam-info-box">
                  <h4>本番同様の環境で模擬試験を行う</h4>
                  <p>
                    本番の時間配分や解答順序を体得するために、
                    模擬試験を本番同様の環境で行うことが非常に有効です。
                  </p>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>模擬試験で身につける能力</h4>
                      <ul>
                        <li>時間管理の感覚</li>
                        <li>出題順序・優先順位の決め方</li>
                        <li>自己採点→弱点克服</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>実践演習の重要性</h4>
                      <p>
                        これらは実践演習でしか身につかない能力です。
                        定期的に模擬試験を受けることで、本番での対応力を養いましょう。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>科目ごとの戦略と"重点配分"</h3>
                <div className="exam-info-box highlight">
                  <h4>効率的な対策には戦略的な配分が重要</h4>
                  <p>
                    修了考査は科目ごとに配点・難易度が異なります。
                    効率的な対策には、以下のような戦略的な配分が効いてきます。
                  </p>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>戦略的な配分</h4>
                      <ul>
                        <li>得意科目はさらに強化</li>
                        <li>苦手科目は重点的に復習</li>
                        <li>実務経験が浅い分野は基礎講義から整理</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>配点の高い科目</h4>
                      <p>
                        特に会計・監査・租税は配点が高いのでバランスよく対策します。
                      </p>
                      <ul>
                        <li>会計</li>
                        <li>監査</li>
                        <li>租税</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>勉強スケジュールの作り方（Tips）</h3>
                <div className="exam-info-box">
                  <h4>スケジュールの工夫</h4>
                  <p>
                    受験生の体験や試験戦略に共通しているのが、以下のようなスケジュールの工夫です。
                  </p>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>長期計画</h4>
                      <ul>
                        <li>1年以上前から少しずつスタート</li>
                        <li>答練や模擬試験を逆算して計画立案</li>
                        <li>学習タスクを細分化して小さな成功体験を積む</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>日常の習慣化</h4>
                      <ul>
                        <li>毎日の学習時間を決めて習慣化</li>
                        <li>例：平日2–3時間、休日長時間</li>
                        <li>無理のない計画を立てる</li>
                      </ul>
                    </div>
                  </div>
                  <p className="note-text" style={{ marginTop: '20px' }}>
                    これは短答・論文式でも言える基本ですが、修了考査でも同様に重要です。
                  </p>
                </div>
              </div>

              <div className="guide-section">
                <h3>実務論点の確認</h3>
                <div className="exam-info-box">
                  <h4>実務論点は過去問中心に確認</h4>
                  <p>
                    修了考査では実務論点が多く出題されます。
                    過去問を中心に、実務論点を確認しましょう。
                  </p>
                  <ul style={{ marginTop: '15px' }}>
                    <li>過去問で出題された実務論点をリストアップ</li>
                    <li>実務補習で学んだ内容と結びつける</li>
                    <li>実務的な判断力を養う</li>
                  </ul>
                </div>
              </div>

              <div className="guide-section">
                <h3>補習所・講座の活用</h3>
                <div className="exam-info-box highlight">
                  <p>
                    専門予備校では修了考査向けの教材・答練・解説講座があり、
                    受験対策を体系的にできます。
                  </p>
                  <ul style={{ marginTop: '15px' }}>
                    <li>修了考査向けの講座を受講する</li>
                    <li>答練を活用して実力を確認する</li>
                    <li>解説講座で理解を深める</li>
                  </ul>
                </div>
              </div>

              <div className="guide-section">
                <h3>合格者の具体的Tips（実践例）</h3>
                <div className="exam-info-box highlight">
                  <h4>受験者の体験談から学ぶ実践例</h4>
                  <p>
                    受験者の体験談では以下のような実践例もあります。
                    これらは実務ベースの出題に強くなるだけでなく、
                    本番でも余裕を持って取り組む力を養います。
                  </p>
                  <div className="tips-grid" style={{ marginTop: '20px' }}>
                    <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '2px solid var(--primary-color)' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>✔ 計算は3回以上繰り返して処理時間を短縮</strong>
                    </div>
                    <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '2px solid var(--primary-color)' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>✔ 理論問題は「頭の中で解答の構成を考えてから筆記」</strong>
                    </div>
                    <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '2px solid var(--primary-color)' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>✔ 演習で時間配分のルールを作る（例：計算優先 → 後で論述）</strong>
                    </div>
                    <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '2px solid var(--primary-color)' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>✔ 過去問と答練の結果から毎週の弱点リストを作成して復習</strong>
                    </div>
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
                  <p style={{ marginTop: '20px', fontWeight: '600', fontSize: '1.1rem', textAlign: 'center' }}>
                    こうした戦略的な学習が"合格率を上げる鍵"になります。
                  </p>
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

