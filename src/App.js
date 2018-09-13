import React, { Component } from 'react'
import styled from 'styled-components'

import NavBar from './components/_navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Blog from './components/Blog'
import Contact from './components/Contact'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 40px 50px;
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`

const NavWrapper = styled.div`
  margin: 0;
  padding: 0;
`

class App extends Component {
  constructor() {
    super()

    this.state = {
      width: 0,
      height: 0,
      yPosition: 0,
      wheelState: 0,
      actvieComponent: <Home />,
      navActive: 'home'
    }

    this.mouseDownEvent = this.mouseDownEvent.bind(this)
    this.mouseUpEvent = this.mouseUpEvent.bind(this)
    this.navClickEvent = this.navClickEvent.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize.bind(this))
    window.addEventListener('wheel', this.wheelEvent.bind(this))

    this.handleWindowResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize.bind(this))
    window.removeEventListener('wheel', this.wheelEvent.bind(this))
  }

  handleWindowResize() {
    let newWidth = window.innerWidth
    let newHeight = window.innerHeight

    this.setState({ width: newWidth, height: newHeight })
  }

  wheelEvent(e) {
    let currentWheel = this.state.wheelState
    if(e.deltaY === 100){
      if(currentWheel < 5) {
        currentWheel++
      }
      this.setState({ wheelState: currentWheel})
    }
    if(e.deltaY === -100){
      if(currentWheel > 0) {
        currentWheel--
      }
      this.setState({ wheelState: currentWheel})
    }

    this.checkWindow(currentWheel)
  }

  mouseDownEvent(e) {
    let y = e.clientY
    this.setState({yPosition: y })
  }

  mouseUpEvent(e) {
    let yNew = e.clientY
    let yOld = this.state.yPosition
    let currentWheel = this.state.wheelState

    if( yNew < yOld ){
      if(currentWheel < 5) {
        currentWheel++
      }
      this.setState({ wheelState: currentWheel})
    } else if(yNew === yOld) {
      return
    }else {
      if(currentWheel > 0) {
        currentWheel--
      }
      this.setState({ wheelState: currentWheel})
    }

    this.checkWindow(currentWheel)
  }

  navClickEvent(e, name){
    let wheel = this.state.wheelState
    switch(name){
      case 'home':
        wheel = 0
        break;
      case 'about':
        wheel = 1
        break;
      case 'portfolio':
        wheel = 2
        break;
      case 'services':
        wheel = 3
        break;
      case 'blog':
        wheel = 4
        break;
      case 'contact':
        wheel = 5
        break;
      default:
        break;
    }
    this.setState({ wheelState: wheel })
    this.checkWindow(wheel)
  }

  checkWindow(wheel) {
    let activeComp = this.state.actvieComponent
    let activeNav = this.state.navActive
    switch (wheel) {
      case 0:
        activeComp = <Home />
        activeNav = 'home'
        break;
      case 1:
        activeComp = <About />
        activeNav = 'about'
        break;
      case 2:
        activeComp = <Portfolio />
        activeNav = 'portfolio'
        break;
      case 3:
        activeComp = <Services />
        activeNav = 'services'
        break;
      case 4:
        activeComp = <Blog />
        activeNav = 'blog'
        break;
      case 5:
        activeComp = <Contact />
        activeNav = 'contact'
        break;
      default:
        break;
    }
    return this.setState({actvieComponent: activeComp, navActive: activeNav })
  }

  render() {
    const ContainerStyles = {

      width: `${this.state.width}px`,
      height: `${this.state.height}px`
    }

    return (
      <div style={ContainerStyles} >
        <Wrapper className="container" >
          <div className="row">
            <ContentWrapper className="col-9" onMouseDown={this.mouseDownEvent} onMouseUp={this.mouseUpEvent} >
              {this.state.actvieComponent}
            </ContentWrapper>
            <NavWrapper className="col-3">
              <NavBar active={this.state.navActive} clicked={this.navClickEvent} />
            </NavWrapper>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default App
