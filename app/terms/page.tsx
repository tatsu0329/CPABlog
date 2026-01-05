'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function TermsPage() {
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

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="site-title">利用規約</h1>
          <p className="site-subtitle">サイトのご利用にあたって</p>
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
              <h2>利用規約</h2>
            </div>

            <div className="exam-content">
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                本サイト「公認会計士試験ガイド」（以下「当サイト」）をご利用いただくにあたり、
                以下の利用規約をお読みいただき、これに同意していただいた上でご利用ください。
              </p>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                1. 規約の適用
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                本規約は、当サイトの利用に関する条件を定めるものです。
                当サイトをご利用いただくことにより、本規約に同意いただいたものとみなします。
              </p>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                2. サイトの利用
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                当サイトは、公認会計士試験に関する情報提供を目的として運営されています。
                ユーザーは、当サイトを個人的・非商業的な目的で利用することができます。
              </p>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                3. 禁止事項
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                ユーザーは、当サイトの利用にあたり、以下の行為を行ってはなりません：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '30px', lineHeight: '1.8' }}>
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当サイトの内容を無断で複製、転載、改変する行為</li>
                <li>当サイトの運営を妨害する行為</li>
                <li>他のユーザーまたは第三者に損害、不利益、迷惑を及ぼす行為</li>
                <li>その他、当サイトが不適切と判断する行為</li>
              </ul>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                4. 免責事項
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                当サイトの情報については、可能な限り正確な情報を提供するよう努めていますが、
                その正確性、完全性、有用性等について保証するものではありません。
                当サイトの利用により生じた損害について、当サイトは一切の責任を負いません。
              </p>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                公認会計士試験に関する最新の情報については、必ず日本公認会計士協会などの公式サイトでご確認ください。
              </p>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                5. 知的財産権
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                当サイトに掲載されている情報、テキスト、画像、その他のコンテンツ（以下「コンテンツ」）の
                著作権その他の知的財産権は、当サイトまたは正当な権利者に帰属します。
                ユーザーは、コンテンツを個人利用の範囲内で使用することができますが、
                事前の許可なく、複製、転載、改変、販売等を行うことはできません。
              </p>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                6. リンク
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                当サイトから他のウェブサイトへのリンク、または他のウェブサイトから当サイトへのリンクが
                設置されている場合でも、当サイトは、リンク先のウェブサイトの内容や利用に関して
                一切の責任を負いません。
              </p>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                7. 規約の変更
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                当サイトは、必要に応じて本規約を変更する場合があります。
                変更後の規約は、当サイトに掲載した時点で効力を生じます。
              </p>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                8. 準拠法・管轄裁判所
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                本規約は、日本法に準拠して解釈されるものとします。
                本規約に関する紛争については、当サイトの所在地を管轄する裁判所を専属的合意管轄とします。
              </p>

              <p style={{ marginTop: '40px', padding: '20px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                <strong>最終更新日：2025年1月</strong>
              </p>
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

