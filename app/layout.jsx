import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metaData = {
  title: "PromptAi",
  description: "Get prompts help",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
