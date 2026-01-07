'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function PrivacyPage() {
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
          <h1 className="site-title">プライバシーポリシー</h1>
          <p className="site-subtitle">個人情報の取り扱いについて</p>
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
              <h2>プライバシーポリシー</h2>
            </div>

            <div className="exam-content">
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                本サイト「公認会計士試験ガイド」（以下「当サイト」）は、ユーザーの個人情報の保護を重要視しており、
                以下のプライバシーポリシーに従って、適切に取り扱います。
              </p>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                1. 収集する情報
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                当サイトでは、以下の情報を収集する場合があります：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '30px', lineHeight: '1.8' }}>
                <li>アクセスログ（IPアドレス、ブラウザ情報、アクセス日時など）</li>
                <li>Google Analyticsなどのアクセス解析ツールによる情報</li>
                <li>Google AdSenseなどの広告配信ツールによる情報</li>
              </ul>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                2. 情報の利用目的
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                収集した情報は、以下の目的で利用します：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '30px', lineHeight: '1.8' }}>
                <li>サイトの改善およびサービス向上のための分析</li>
                <li>適切な広告配信のための利用</li>
                <li>サイトの運営および管理</li>
              </ul>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                3. 第三者への提供
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                当サイトでは、以下の場合を除き、個人情報を第三者に提供することはありません：
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '30px', lineHeight: '1.8' }}>
                <li>ユーザーの同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>Google AnalyticsやGoogle AdSenseなどのサービスプロバイダー（これらのサービスはそれぞれのプライバシーポリシーに従って情報を処理します）</li>
              </ul>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                4. Cookieの使用
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                当サイトでは、サービス向上のため、Cookieを使用する場合があります。
                Cookieは、ウェブサイトがユーザーのコンピュータに保存する小さなテキストファイルです。
                ブラウザの設定により、Cookieを無効にすることができますが、その場合、一部の機能が正常に動作しない可能性があります。
              </p>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                5. 広告について
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                当サイトでは、Google AdSenseなどの第三者広告配信サービスを使用しています。
                これらのサービスは、Cookieを使用してユーザーに関する情報を収集し、適切な広告を配信します。
                Google広告のCookieを無効にするには、<a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Google広告設定</a>にアクセスしてください。
              </p>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                6. プライバシーポリシーの変更
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                当サイトは、必要に応じて本プライバシーポリシーを変更する場合があります。
                変更後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じます。
              </p>

              <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                7. お問い合わせ
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                本プライバシーポリシーに関するお問い合わせについては、<Link href="/other" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>その他</Link>ページよりご連絡ください。
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



