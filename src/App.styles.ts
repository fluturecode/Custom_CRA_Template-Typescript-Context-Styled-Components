import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

html {
  height: 100%
}

body {
  justify-content: center;

}

* { 
  font-family: "Georgia", sans-serif
}
`

export const AppContainer = styled.div`
	display: flex;
	align-items: center;

	> h1 {
		color: #000000;
	}
`
