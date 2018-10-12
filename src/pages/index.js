import React, { Component } from 'react'

import Layout from '../components/layout'
import keywordArr from '../data/keywordArr'
import Keywords from '../components/Keywords'
import projectData from '../data/projectData'
import Projects from '../components/Projects'
import Banner from '../components/banner'
import Contact from '../components/contact'
import About from '../components/about'
import BackToTop from '../components/backToTop'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keywords: keywordArr,
      filterWord: '',
      projectData: projectData,
    }
    this.keywordClick = this.keywordClick.bind(this)
  }

  keywordClick(e) {

    this.state.filterWord === e.target.text
      ? this.setState({ filterWord: '' })
      : this.setState({ filterWord: e.target.text })
  }

  componentDidMount = () => {
    let arr = []
    projectData.map(proj => {
      return (arr = arr.concat(proj.keywords))
    })
    let set = new Set(arr)
    let keyArr = Array.from(set)
    return this.setState({ keywords: keyArr })
  }

  render() {
  
    return (
      <Layout>
        <BackToTop />
        <Banner />
        <Keywords
          keywords={this.state.keywords}
          keywordClick={this.keywordClick}
          filterWord={this.state.filterWord}
        />
        <Projects
          projectData={this.state.projectData}
          filterWord={this.state.filterWord}
        />
        <About />
        <Contact />
      </Layout>
    )
  }
}

export default Index
