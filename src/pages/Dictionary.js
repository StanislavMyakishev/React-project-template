import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAppLoading } from '../actions/app'
import Index from '../components/PageTitle'

class Dictionary extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  handleLoading = () => {
    const { setAppLoading } = this.props
    this.setState(
      (prevState) => ({ isLoading: !prevState.isLoading }),
      () => {
        const { isLoading } = this.state
        setAppLoading(isLoading)
      }
    )
  }

  render() {
    const { title, isLoading } = this.props
    return (
      <div>
        <h1>DICTIONARY PAGE</h1>
        <Index title={title} />
        <h2 onClick={this.handleLoading}>{isLoading ? 'Loading' : 'Not loading'}</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.app.title,
    isLoading: state.app.isLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setAppLoading,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dictionary))
