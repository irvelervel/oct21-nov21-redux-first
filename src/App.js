import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import './App.css'
import { connect } from 'react-redux'
// connect is a function capable of linking your component to the Redux Store
// every component you want to link needs to import the connect function and use it!

// mapStateToProps is a function returning an object
const mapStateToProps = (state) => ({
  // every property of this object is going to be a prop for your component
  count: state.count,
  // count is now *magically* a prop for your component!
  name: 'Rajib',
})

// quick & dirty way: takes all the properties of the state object and makes them props for your component
// not very recommended...
// const mapStateToProps = (state) => state

// "classic" way of writing a function returning an object:
// const mapStateToProps = () => {
//   return {
//     // put your properties here
//   }
// }

// mapDispatchToProps is a function returning an object
const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => {
    dispatch({
      type: 'INCREMENT_COUNTER',
    })
  },
})

const App = ({ count, incrementCounter }) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button onClick={incrementCounter}>+</Button>
        <h3>{count}</h3>
        <Button>-</Button>
      </header>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// the connect() function decides at which level you want this component to be able to interact to the redux store
// you have two options:
// 1) "READ ONLY MODE"
// 2) "READ/WRITE MODE"
