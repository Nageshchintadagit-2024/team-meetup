import './App.css'

import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import NamedContext from './context/NamedContext'

import Home from './components/Home'

import Register from './components/Register'

import NotFound from './components/NotFound'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    username: '',
    category: topicsList[0].displayText,
    isRegistered: false,
  }

  updateUsername = value => {
    this.setState({username: value})
  }

  changeCategory = value => {
    const valueObject = topicsList.filter(each => each.id === value)
    this.setState({category: valueObject[0].displayText})
  }

  toggleRegister = () => {
    this.setState({isRegistered: true})
  }

  render() {
    const {username, category, isRegistered} = this.state
    return (
      <NamedContext.Provider
        value={{
          username,
          category,
          updateUsername: this.updateUsername,
          isRegistered,
          changeCategory: this.changeCategory,
          toggleRegister: this.toggleRegister,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </NamedContext.Provider>
    )
  }
}

export default App
