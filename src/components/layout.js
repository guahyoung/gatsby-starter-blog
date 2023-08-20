import * as React from "react"
import { Link } from "gatsby"
import useTheme from "../hooks/useTheme"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const [theme, themeToggler] = useTheme()

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div
      className="global-wrapper"
      data-theme={theme}
      data-is-root-path={isRootPath}
    >
      <header className="global-header">
        {header}
        {theme === "light" ? (
          <button
            className="btn-theme dark"
            onClick={() => {
              themeToggler()
            }}
          >
            <div>다크 모드로 보기</div>
          </button>
        ) : (
          <button
            className="btn-theme light"
            onClick={() => {
              themeToggler()
            }}
          >
            <div>라이트 모드로 보기</div>
          </button>
        )}
      </header>
      <main className="main-list">{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
