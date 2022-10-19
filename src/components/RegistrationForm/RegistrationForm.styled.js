import styled from "styled-components";
import { Form, Field } from "formik";
import { device } from "styles/Media.variables";
import { ReactComponent as Email } from "images/svgs/email.svg";
import { ReactComponent as Password } from "images/svgs/password.svg";
import { ReactComponent as User } from "images/svgs/user.svg";

export const LogoWrapper = styled.div`
	@media ${device.tabletBefore} {
		display: flex;
		justify-content: center;
	}
`;

export const FormWrapper = styled.div`
	background-color: #ffffff;
	margin: 0 auto;

	@media ${device.tabletBefore} {
		padding-top: 36px;
		padding-bottom: 36px;
		max-width: 320px;
	}
`;

export const StyledForm = styled(Form)`
	text-align: center;
	@media ${device.tabletBefore} {
		margin-top: 60px;
	}
`;

export const StyledLabel = styled.label`
	position: relative;
	display: block;
	&:not(:last-child) {
		margin-bottom: 40px;
	}
`;

export const StyledField = styled(Field)`
	width: 100%;
	padding-left: 55px;
	border: none;
	border-bottom: 1px solid #e0e0e0;
	font-size: 18px;
	outline: none;
	transition: 0.2s ease-in-out;

	&::placeholder {
		color: #bdbdbd;
	}

	&:focus {
		border-color: #24cca7;
	}

	&:focus ~ svg {
		fill: #24cca7;
	}
`;

export const EmailLogo = styled(Email)`
	position: absolute;
	top: 0;
	left: 10px;
	fill: #e0e0e0;
`;

export const PasswordLogo = styled(Password)`
	position: absolute;
	top: 0;
	left: 10px;
	fill: #e0e0e0;
`;

export const UserLogo = styled(User)`
	position: absolute;
	top: 0;
	left: 10px;
	fill: #e0e0e0;
`;

export const AuthError = styled.p`
	position: absolute;
	font-size: 12px;
	margin-left: 55px;
	color: #ff6596;
`;

export const ButtonWrapper = styled.div`
	margin-top: 40px;
	display: flex;
  flex-direction: column;
	align-items: center;
`;