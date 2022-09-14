# copilot-poc

```mermaid
sequenceDiagram
participant LoginPage
participant WelcomePage
participant BSLClient
participant ActiveDirectory
participant userProfile
participant azureAD
loop field validations
	LoginPage->LoginPage: username validation
	LoginPage->LoginPage: address validation
end
LoginPage->WelcomePage: Welcome
LoginPage->BSLClient: Authentication
LoginPage->ActiveDirectory: Roles
LoginPage->userProfile: User Profile
LoginPage->azureAD: Azure AD
```

```mermaid
WelcomePage-->LoginPage: Sucessfully Logged
```