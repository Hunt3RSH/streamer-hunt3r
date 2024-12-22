import { GlobalStyles } from 'utils/GlobalStyle';

export const App = () => {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>🎮 Hunt3R's Stream</h1>
        <p>Ласкаво прошу на мій сайт!</p>
        <div className="links">
          <a href="https://twitch.tv/hunt3r_wtf" target="_blank" rel="noopener noreferrer">
            📺 Twitch
          </a>
          <a href="https://discord.gg/CSMdbPCHXf" target="_blank" rel="noopener noreferrer">
            💬 Discord
          </a>
          <a href="https://github.com/Hunt3RSH" target="_blank" rel="noopener noreferrer">
            🔗 GitHub
          </a>
        </div>
        <p>
          Підтримайте стрімера: <a href="https://send.monobank.ua/jar/8GgAujGTyF">Посилання на донат</a>
        </p>
      </header>
    </div>
      <GlobalStyles />
    </>
  );
};
