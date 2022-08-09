# copilot-poc

```mermaid
sequenceDiagram
participant LoginPage
participant WelcomePage
loop field validations
	LoginPage->LoginPage: username validation
	LoginPage->LoginPage: address validation
end
LoginPage->WelcomePage: Welcome
WelcomePage-->LoginPage: Sucessfully Logged
```