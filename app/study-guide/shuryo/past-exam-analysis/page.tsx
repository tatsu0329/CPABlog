'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function PastExamAnalysisPage() {
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
          <h1 className="site-title">過去問を徹底的に分析・活用する</h1>
          <p className="site-subtitle">修了考査合格への過去問分析完全ガイド</p>
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
              <span className="exam-number">📊</span>
              <h2>過去問分析の重要性</h2>
            </div>
            
            <div className="exam-content">
              <div className="guide-section">
                <h3>なぜ過去問分析が重要なのか</h3>
                <div className="exam-info-box highlight">
                  <p>
                    修了考査の出題傾向は実務寄りで、論点も広範囲です。
                    過去問を単に解くだけでなく、徹底的に分析することで、
                    出題傾向を把握し、効率的な学習が可能になります。
                  </p>
                  <ul style={{ marginTop: '15px' }}>
                    <li>出題パターンを把握できる</li>
                    <li>頻出テーマを重点的に対策できる</li>
                    <li>学習の優先順位が明確になる</li>
                    <li>時間を効率的に使える</li>
                  </ul>
                </div>
              </div>

              <div className="guide-section">
                <h3>過去問分析の基本サイクル</h3>
                <div className="exam-info-box">
                  <h4>「傾向分析 → 演習 → 復習」のサイクル</h4>
                  <div className="flow-box" style={{ marginTop: '20px' }}>
                    <ol className="flow-list">
                      <li><strong>傾向分析</strong>：過去問を分析して出題傾向を把握</li>
                      <li><strong>演習</strong>：分析した傾向に基づいて問題を解く</li>
                      <li><strong>復習</strong>：間違えた問題や重要論点を復習</li>
                      <li><strong>再分析</strong>：復習の結果を踏まえて再度分析</li>
                    </ol>
                  </div>
                  <p style={{ marginTop: '20px', fontWeight: '600' }}>
                    このサイクルを繰り返すことで、得点力が格段に上がります。
                  </p>
                </div>
              </div>

              <div className="guide-section">
                <h3>過去問分析の具体的な手順</h3>
                <div className="subject-detail-grid">
                  <div className="subject-card">
                    <h4>ステップ1：過去問を収集する</h4>
                    <p>
                      まずは過去問を収集します。修了考査では9年分以上の過去問が
                      公式サイトで公開されています。
                    </p>
                    <ul>
                      <li>公式サイトから過去問をダウンロード</li>
                      <li>年度ごとに整理する</li>
                      <li>問題と解答をセットで保管</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>ステップ2：出題傾向を分析する</h4>
                    <p>
                      過去問を解きながら、出題傾向を分析します。
                      どのような論点がよく出るかを把握しましょう。
                    </p>
                    <ul>
                      <li>科目ごとの出題頻度を確認</li>
                      <li>出題形式を把握</li>
                      <li>難易度の傾向を分析</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>ステップ3：頻出テーマをリストアップ</h4>
                    <p>
                      頻出テーマをリストアップして、重点的に学習する論点を明確にします。
                    </p>
                    <ul>
                      <li>頻出テーマを科目ごとに整理</li>
                      <li>重要度を評価</li>
                      <li>学習の優先順位を決定</li>
                    </ul>
                  </div>
                  <div className="subject-card">
                    <h4>ステップ4：分析結果を活用する</h4>
                    <p>
                      分析結果を学習計画に反映させます。
                      頻出テーマを重点的に学習しましょう。
                    </p>
                    <ul>
                      <li>学習計画に反映</li>
                      <li>重点的に学習する論点を明確化</li>
                      <li>定期的に分析結果を見直す</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>頻出テーマの把握</h3>
                <div className="exam-info-box highlight">
                  <h4>修了考査でよく出るテーマ</h4>
                  <p>
                    修了考査では以下のようなテーマが頻繁に出題されます。
                    これらのテーマを重点的に対策しましょう。
                  </p>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>連結会計</h4>
                      <p>
                        連結財務諸表の作成や連結調整など、
                        連結会計に関する問題が頻繁に出題されます。
                      </p>
                      <ul>
                        <li>連結財務諸表の作成</li>
                        <li>連結調整仕訳</li>
                        <li>持分法の適用</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>IFRS関連</h4>
                      <p>
                        IFRS（国際財務報告基準）に関する問題も
                        出題されることがあります。
                      </p>
                      <ul>
                        <li>IFRSの基本的な考え方</li>
                        <li>日本基準との違い</li>
                        <li>IFRS適用の実務</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>構造論点</h4>
                      <p>
                        企業の組織再編やM&Aなど、
                        構造的な論点も出題されます。
                      </p>
                      <ul>
                        <li>企業組織再編</li>
                        <li>M&Aの会計処理</li>
                        <li>持分変動の処理</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>実務論点</h4>
                      <p>
                        実務でよく扱う論点が多く出題されます。
                        実務経験と結びつけて理解しましょう。
                      </p>
                      <ul>
                        <li>監査実務</li>
                        <li>税務実務</li>
                        <li>会計実務</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>過去問の論点を体系化する</h3>
                <div className="exam-info-box">
                  <h4>論点をまとめて体系化</h4>
                  <p>
                    過去問で出題された論点をまとめて体系化することで、
                    知識を整理し、理解を深めることができます。
                  </p>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>科目ごとに整理</h4>
                      <ul>
                        <li>会計に関する論点</li>
                        <li>監査に関する論点</li>
                        <li>租税に関する論点</li>
                        <li>その他の論点</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>重要度で分類</h4>
                      <ul>
                        <li>頻出論点（最重要）</li>
                        <li>時々出る論点（重要）</li>
                        <li>まれに出る論点（補足）</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>関連性で整理</h4>
                      <ul>
                        <li>関連する論点をグループ化</li>
                        <li>論点間の関係を理解</li>
                        <li>体系的に学習</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>実務であまり触れない分野の対策</h3>
                <div className="exam-info-box highlight">
                  <h4>早めに基礎から固める</h4>
                  <p>
                    実務であまり触れない分野（IFRSや複雑な論点）は
                    早めに基礎から固めると安心です。
                  </p>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>IFRS関連</h4>
                      <p>
                        実務でIFRSを扱う機会が少ない場合、
                        基礎からしっかり学習する必要があります。
                      </p>
                      <ul>
                        <li>IFRSの基本的な考え方を理解</li>
                        <li>日本基準との違いを把握</li>
                        <li>過去問で出題傾向を確認</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>複雑な論点</h4>
                      <p>
                        複雑な論点も早めに対策することで、
                        本番で余裕を持って対応できます。
                      </p>
                      <ul>
                        <li>基礎講義から整理</li>
                        <li>段階的に理解を深める</li>
                        <li>過去問で実践的に学習</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>過去問分析の実践例</h3>
                <div className="exam-info-box">
                  <h4>具体的な分析の進め方</h4>
                  <div className="schedule-card" style={{ marginTop: '20px' }}>
                    <div className="schedule-item full-width">
                      <h4>週次での分析サイクル</h4>
                      <div style={{ marginTop: '15px' }}>
                        <p><strong>月曜日</strong>：過去問を解く（時間を計って）</p>
                        <p><strong>火曜日</strong>：解答を確認し、間違えた問題を分析</p>
                        <p><strong>水曜日</strong>：出題傾向を分析し、頻出テーマをリストアップ</p>
                        <p><strong>木曜日</strong>：頻出テーマを重点的に学習</p>
                        <p><strong>金曜日</strong>：間違えた問題を再度解く</p>
                        <p><strong>土日</strong>：週の復習と次の週の準備</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>過去問分析のチェックリスト</h3>
                <div className="exam-info-box highlight">
                  <h4>分析の際に確認すべき項目</h4>
                  <div className="subject-detail-grid" style={{ marginTop: '20px' }}>
                    <div className="subject-card">
                      <h4>出題傾向</h4>
                      <ul>
                        <li>□ 科目ごとの出題頻度</li>
                        <li>□ 出題形式の傾向</li>
                        <li>□ 難易度の傾向</li>
                        <li>□ 年度ごとの変化</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>頻出テーマ</h4>
                      <ul>
                        <li>□ 連結会計</li>
                        <li>□ IFRS関連</li>
                        <li>□ 構造論点</li>
                        <li>□ 実務論点</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>自分の弱点</h4>
                      <ul>
                        <li>□ 間違えた問題の論点</li>
                        <li>□ 苦手な科目・分野</li>
                        <li>□ 時間がかかる問題</li>
                        <li>□ 理解が浅い論点</li>
                      </ul>
                    </div>
                    <div className="subject-card">
                      <h4>学習計画</h4>
                      <ul>
                        <li>□ 重点的に学習する論点</li>
                        <li>□ 学習の優先順位</li>
                        <li>□ 復習すべき問題</li>
                        <li>□ 次の分析の目標</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-section">
                <h3>過去問分析の効果を最大化するコツ</h3>
                <div className="exam-info-box">
                  <h4>分析をより効果的にするためのポイント</h4>
                  <div className="tips-grid" style={{ marginTop: '20px' }}>
                    <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '2px solid var(--primary-color)' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>💡 定期的に分析結果を見直す</strong>
                      <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                        分析結果は一度作成したら終わりではなく、
                        定期的に見直して更新することが重要です。
                      </p>
                    </div>
                    <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '2px solid var(--primary-color)' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>💡 分析結果を可視化する</strong>
                      <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                        表やグラフを使って分析結果を可視化すると、
                        傾向がより明確になります。
                      </p>
                    </div>
                    <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '2px solid var(--primary-color)' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>💡 他の受験者と情報交換する</strong>
                      <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                        他の受験者と分析結果を共有することで、
                        新しい視点が得られます。
                      </p>
                    </div>
                    <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '2px solid var(--primary-color)' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>💡 過去問と答練を比較する</strong>
                      <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                        過去問と答練を比較することで、
                        重要論点を見極めることができます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="exam-info-box highlight" style={{ marginTop: '30px' }}>
                <p style={{ margin: 0 }}>
                  <Link href="/study-guide/shuryo" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>
                    ← 修了考査の対策方法に戻る
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







