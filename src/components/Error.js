import { Component } from 'react'

export class Error extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
        console.log({ error, errorInfo })
    }
    render() {
        const { children } = this.props
        const { hasError } = this.state
        if (hasError) {
            return <h1>Опаньки </h1>

        } else
            return children
    }
}