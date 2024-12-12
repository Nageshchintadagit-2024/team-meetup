import {Component} from 'react'

import {Link} from 'react-router-dom'

import NamedContext from '../../context/NamedContext'

import {
  MainAppContainer,
  WebsiteImage,
  HomeContainer,
  WelcomeText,
  RegisterText,
  RegisterButton,
  UserName,
  Category,
  MeetupImage,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <NamedContext.Consumer>
        {value => {
          const {isRegistered, username, category} = value

          return (
            <MainAppContainer>
              <WebsiteImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <HomeContainer>
                <UserName>
                  {isRegistered ? `Hello ${username}` : 'Welcome to Meetup'}
                </UserName>
                <Category>
                  {isRegistered
                    ? `Welcome to ${category}`
                    : 'Please register for the topic'}
                </Category>
                {isRegistered === false && (
                  <Link to="/register">
                    <RegisterButton type="button">Register</RegisterButton>
                  </Link>
                )}
                <MeetupImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            </MainAppContainer>
          )
        }}
      </NamedContext.Consumer>
    )
  }
}

export default Home
