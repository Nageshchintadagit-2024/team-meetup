import {Component} from 'react'

import NamedContext from '../../context/NamedContext'

import {
  MainAppContainer,
  WebsiteImage,
  HomeContainer,
  RegisterImage,
  FormContainer,
  JoinText,
  Select,
  Label,
  Input,
  InputContainer,
  RegisterNowButton,
  ErrorMsg,
} from './styledComponents'

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

class Register extends Component {
  state = {
    userName: '',
    cartegoryId: topicsList[0].id,
    isShowErrorMsg: false,
  }

  render() {
    const {userName, isShowErrorMsg, categoryId} = this.state
    return (
      <NamedContext.Consumer>
        {value => {
          const {updateUsername, changeCategory, toggleRegister} = value

          const onChangeCategory = event => {
            this.setState({categoryId: event.target.value})
            changeCategory(event.target.value)
          }

          const onChangeUsername = event => {
            this.setState({userName: event.target.value})
            updateUsername(event.target.value)
          }

          const onClickRegisterNowButton = event => {
            event.preventDefault()
            if (userName !== '') {
              const {history} = this.props
              toggleRegister()
              history.replace('/')
            } else if (userName === '') {
              this.setState({isShowErrorMsg: true})
            }
          }

          return (
            <MainAppContainer>
              <WebsiteImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <HomeContainer>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <FormContainer onSubmit={onClickRegisterNowButton}>
                  <JoinText>Let us join</JoinText>
                  <InputContainer>
                    <Label htmlFor="name">NAME</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={userName}
                      onChange={onChangeUsername}
                    />
                  </InputContainer>
                  <Label htmlFor="select">TOPICS</Label>
                  <Select
                    id="select"
                    value={categoryId}
                    onChange={onChangeCategory}
                  >
                    {topicsList.map(each => (
                      <option key={each.id} value={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </Select>
                  <RegisterNowButton type="submit">
                    Register Now
                  </RegisterNowButton>
                  {isShowErrorMsg && (
                    <ErrorMsg>Please enter your name</ErrorMsg>
                  )}
                </FormContainer>
              </HomeContainer>
            </MainAppContainer>
          )
        }}
      </NamedContext.Consumer>
    )
  }
}

export default Register
