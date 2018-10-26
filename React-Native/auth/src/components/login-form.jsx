import React, { Component } from 'react';

import { Card, CardSection, Button, Input} from './common';

export default class LoginForm extends Component
{
	state = { email : '' };

	render()
	{
		return(
			<Card>
				<CardSection>

					{/* Just like the Image tag, TextInput by default has no height and width
						We also have to pass by the value attribute because RN is a bit strange with TextInpit
						and the TextInput never know what value it has*/}
					<Input
						label={ 'Email' }
						value={ this.state.email }
						onChangeText={ email => this.setState( { email }) }
						placeholder={ 'user@gmail.com' }
					/>

				</CardSection>

				<CardSection />

				<CardSection>

					<Button>Login</Button>

				</CardSection>
			</Card>
		);
	}
}