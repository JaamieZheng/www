/* eslint-disable @next/next/no-html-link-for-pages */

import React from 'react'

import { useUrl } from 'hooks/url'
import { NavItemInfo, navItems } from '../common'
import GitHubIcon from '../GitHubIcon'
import Logo from '../../Icon/Logo'
import styles from './style.module.scss'

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <a href="/" style={{ lineHeight: 1 }}>
          <Logo />
        </a>
        <div className={styles.links}>
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
          <a className={styles.githubLink} href="https://github.com/goplus/gop" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </header>
  )
}

function NavItem({ href, isBlank, children }: NavItemInfo) {
  const urlStr = useUrl()
  const currentUrl = urlStr != null ? new URL(urlStr) : null
  const itemUrl = new URL(href)
  // TODO: for tutorial, we may want to compare host instead of host + path
  const selected = currentUrl != null && currentUrl.host === itemUrl.host && currentUrl.pathname === itemUrl.pathname
  return (
    <a className={`${styles.linkItem} ${selected ? styles.selected : ''}`} href={href} {...( isBlank && { target:"_blank" } )} rel="noreferrer">
      {children}
    </a>
  )
}
