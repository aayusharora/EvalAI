angular.module("evalai-config", [])
.constant("EnvironmentConfig", {"API":"http://localhost:8000/api/","AUTH_REGISTRATION":"auth/registration/","AUTH_URL_ENDPOINT":"auth/login/","EMAIL_VERIFICATION_ENDPOINT":"auth/registration/account-confirm-email/","PASSWORD_RESET_ENDPOINT":"auth/password/reset/confirm/","PASSWORD_RESET_CONFIRM_ENDPOINT":"auth/password/reset/confirm/"});
