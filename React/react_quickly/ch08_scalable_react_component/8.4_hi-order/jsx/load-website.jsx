const LoadWebsite = (Component) => {
  class _LoadWebsite extends React.Component {
    constructor(props) {
      super(props)
      this.state = {label: 'Run', handleClick: this.handleClick.bind(this)} 
    }
    getUrl() {
      // return 'https://lfacebook.github.io/react/docs/top-level-api.htm'
      return 'http://reactquickly.co/'
    }
    handleClick(event) {
      document.getElementById('frame').src = this.getUrl()
    }
    componentDidMount() {
      console.log(ReactDOM.findDOMNode(this))
    }
    render() {
      console.log(this.state)
      return <Component {...this.state} {...this.props} />
    }
  }
  _LoadWebsite.displayName = 'EhnancedComponent'

  return _LoadWebsite
}
