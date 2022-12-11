function MailboxGreeting({ user, unreadMessages }) {
  console.log(unreadMessages);
  return (
    <div>
      <div>Hello {user}</div>
      {unreadMessages > 0 && (
        <div>You have {unreadMessages} unread messages</div>
      )}
    </div>
  );
}

function UserMessageWithIf({ user }) {
  if (user) {
    return (
      <div>
        <h2>How to you do</h2>
        <h2>Hello {user}</h2>
      </div>
    );
  } else {
    return <div>Welcome guest</div>;
  }
}

function UserMessage({ user }) {
  return (
    <div>
      {user ? (
        <div>
          <h2>How to you do</h2>
          <h2>Hello {user}</h2>
        </div>
      ) : (
        <div>Welcome guest</div>
      )}
    </div>
  );
}

function LoginButton({ isLoggedIn }) {
  return <button>{isLoggedIn ? 'Logout' : 'Login'}</button>;
}

function App() {
  return (
    <div>
      <LoginButton isLoggedIn={true} />
      <UserMessage user={'Firas'} />
      <UserMessageWithIf user={'Keren'} />
      <MailboxGreeting user="Shalom" unreadMessages={0} />
    </div>
  );
}

export default App;
