namespace Juegardos.Website.Helpers;

public static class DataAnnotationMessages
{
    public const string UsernameRequired = "Ingresá un nombre de usuario.";
    public const string UsernameOrEmailRequired = "Ingresá un nombre de usuario o email.";
    public const string EmailRequired = "Ingresá un email.";
    public const string EmailMustBeValid = "El email debe ser válido.";
    public const string PasswordRequired = "Ingresá una contraseña.";
    public const string PasswordConfirmRequired = "Debe confirmar la contraseña.";
    public const string PasswordLength = "La contraseña debe tener como mínimo 8 caracteres.";
    public const string PasswordUppercase = "La contraseña debe tener una letra mayúscula.";
    public const string PasswordCompare = "Las contraseñas deben coincidir.";
    public const string PasswordNonAlphanumeric = "La contraseña debe tener al menos un caracter especial (@,#,$,%,*,+,!)";
}
