import './ErrorBoundary.scss'

import { Component } from "react";

import ErrorMessage from '../ErrorMessage/ErrorMessage';

class ErrorBoundary extends Component {
    state = {
      error: false,
    }

    static getDerivedStateFromError (error) {
      return {error: true}
    }

    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo)
      this.setState({error: true})
    }

    render() {
      if(this.state.error){
        return (
          <div className='error_boundary'>
            <ErrorMessage/>
          </div>
        )
      }

      return this.props.children;

    }
}

export default ErrorBoundary