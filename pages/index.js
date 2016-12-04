import React from 'react'
import Link from 'next/link'
export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  render () {
    return <div>
      Hello World {this.props.userAgent}
      <div>Click <Link href="/about"><a>here</a></Link> to read more</div>
    </div>
  }
}
