# copilot-poc

```mermaid
sequenceDiagram
participant LoginPage
participant WelcomePage
participant BSLIDP
loop field validations
	LoginPage->LoginPage: username validation
	LoginPage->LoginPage: address validation
end
LoginPage->BSLIDP: Authenticate
LoginPage->WelcomePage: Welcome
WelcomePage-->LoginPage: Sucessfully Logged
```