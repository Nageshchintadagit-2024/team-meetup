import React from 'react'

const NamedContext = React.createContext({
  username: '',
  updateUsername: () => {},
  cartegory: '',
  changeCategory: () => {},
  isRegistered: false,
  toggleRegister: () => {},
})

export default NamedContext
