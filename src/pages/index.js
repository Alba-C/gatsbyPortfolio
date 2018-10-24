import React, { Component } from 'react'

import Layout from '../components/layout'

import Keywords from '../components/keywords'
import projectData from '../data/projectData'
import Projects from '../components/projects'
import Banner from '../components/banner'
import Contact from '../components/contact'
import About from '../components/about'
import BackToTop from '../components/backToTop'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keywords: ['Featured', 'All'],
      filterWord: 'Featured',
      projectData: projectData,
    }
    this.keywordClick = this.keywordClick.bind(this)
  }

   keywordClick(e) {
    this.filterProjects(e.target.innerText)
  this.state.filterWord === e.target.innerText
    ? this.setState({
      filterWord: 'Featured', projectData: projectData.filter(p => {
        return p.featured === true
      }) })
      : this.setState({ filterWord: e.target.innerText })
}


  componentDidMount() {
    this.getKeywords(projectData)
    this.setState({
      projectData: projectData.filter(p => {
        return p.featured === true
      }),
    })
  }

  filterProjects = (keyword) => {
    switch (keyword) {
      case 'Featured':
        
        return this.setState({
          projectData: projectData.filter(p => {
            return p.featured === true
          }),
        })
      case 'All':
        return this.setState({
          projectData: projectData.filter(p => {
            return p
          }),
        })
      default:
        return this.setState({
          projectData: projectData.filter(p => {
            return p.keywords.indexOf(keyword) !== -1
          }),
        })
    }
  }
  getKeywords = data => {
    let arr = []
    data.map(proj => {
      return (arr = arr.concat(proj.keywords))
    })
    let set = new Set(arr)
    let keyArr = Array.from(set)
    return this.setState({ keywords: this.state.keywords.concat(keyArr) })
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
