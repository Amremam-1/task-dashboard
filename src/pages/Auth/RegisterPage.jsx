import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate, Link } from "react-router-dom"
import { registerUser } from "../../utils/registerUser"
import toast from "react-hot-toast"

const schema = z.object({
  email: z.string().email("Enter valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

const RegisterPage = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    try {
      const user = await registerUser(data.email, data.password)

      toast.success("Account created successfully 🎉")

      navigate("/login")

      reset()
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered.")
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address.")
      } else if (error.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters.")
      } else {
        toast.error("Something went wrong. Please try again.")
      }
    }
  }

  return (
    <div>
      <h1 className="text-textPrimary text-3xl md:text-5xl font-semibold text-center">
        Register
      </h1>

      <div className="my-10 text-textPrimary">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}

          <div className="mb-6 flex flex-col">
            <label htmlFor="email" className="mb-3 text-sm opacity-70">
              Email
            </label>

            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="py-2 px-5 w-70 md:w-90 rounded-md border border-borderColor bg-input focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {errors.email && (
              <p className="text-danger text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}

          <div className="mb-6 flex flex-col">
            <label htmlFor="password" className="mb-3 text-sm opacity-70">
              Password
            </label>

            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Enter password"
              className="py-2 px-5 w-70 md:w-90 rounded-md border border-borderColor bg-input focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {errors.password && (
              <p className="text-danger text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}

          <button
            disabled={!isValid}
            type="submit"
            className={`w-full py-2 rounded-md text-lg font-medium transition ${
              isValid
                ? "bg-primary hover:bg-primaryHover text-white"
                : "bg-primary/50 cursor-not-allowed text-white"
            }`}
          >
            Register
          </button>
        </form>

        {/* Links */}

        <div className="mt-8 flex justify-end items-center">
          <Link className="underline text-primary hover:opacity-80" to="/login">
            Already have account? Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
