import React, { useRef, useState } from 'react'

import { Avatar } from 'react-katar'

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

const avatarContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const App = () => {
  const [stAvatarId, setStAvatarId] = useState(makeid(10))
  const refInput = useRef(null)

  const onClickRandom = () => {
    const rId  = makeid(10)
    setStAvatarId(rId)
    refInput.current.value = rId
  }

  const onChangeId = (e) => {
    const id = e.currentTarget.value
    setStAvatarId(id)
  }

  return(
    <section style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      padding: "1rem"
    }}>
      <h1>
        React-katar
      </h1>
      <a href="https://github.com/lnquy065/react-katar">https://github.com/lnquy065/react-katar</a>
      <p>


        Create random avatars from user IDs, no need to store it on the server
      </p>

      <div>
        User's ID: <input ref={refInput} defaultValue={stAvatarId} onChange={onChangeId}/> <button onClick={onClickRandom}>Random</button>
      </div>


      <div style={{  marginTop: '1rem'}}>
        <h2>Default setting</h2>
        <div style={avatarContainerStyle}>
          <Avatar id={stAvatarId}/>
        </div>
      </div>

      <div style={{  marginTop: '1rem'}}>
        <h2>Shapes: square | circle</h2>
        <div style={avatarContainerStyle}>
          <Avatar id={stAvatarId}/>
          <span style={{padding: '0 1rem'}}>|</span>
          <Avatar id={stAvatarId} shape="circle"/>
        </div>
      </div>


      <div style={{  marginTop: '1rem'}}>
        <h2>Border: default | custom width | custom color</h2>
        <div style={avatarContainerStyle}>
          <Avatar id={stAvatarId} shape="circle" border/>
          <span style={{padding: '0 1rem'}}>|</span>
          <Avatar id={stAvatarId} shape="circle" border borderWidth="5px"/>
          <span style={{padding: '0 1rem'}}>|</span>
          <Avatar id={stAvatarId} shape="circle" border borderColor="black"/>
        </div>
      </div>

      <div style={{  marginTop: '1rem'}}>
        <h2>Width: default | custom width</h2>
        <div style={avatarContainerStyle}>
          <Avatar id={stAvatarId} shape="circle" border/>
          <span style={{padding: '0 1rem'}}>|</span>
          <Avatar id={stAvatarId} shape="circle" border width="100"/>
          <span style={{padding: '0 1rem'}}>|</span>
          <Avatar id={stAvatarId} shape="circle" border width="120"/>
        </div>
      </div>

      <div style={{  marginTop: '1rem'}}>
        <h2>Background: default | custom color</h2>
        <div style={avatarContainerStyle}>
          <Avatar id={stAvatarId} shape="circle" border/>
          <span style={{padding: '0 1rem'}}>|</span>
          <Avatar id={stAvatarId} shape="circle" border backgroundColor="black"/>

        </div>
      </div>

      <div style={{  marginTop: '1rem', paddingBottom: '1rem'}}>
        <h2>With salt</h2>
        <div style={avatarContainerStyle}>
          <Avatar id={stAvatarId} shape="circle" border salt="hello"/>
          <span style={{padding: '0 1rem'}}>|</span>
          <Avatar id={stAvatarId} shape="circle" border salt="my-name"/>
          <span style={{padding: '0 1rem'}}>|</span>
          <Avatar id={stAvatarId} shape="circle" border  salt="is-quy"/>
        </div>
      </div>

    </section>

  )
}

export default App
