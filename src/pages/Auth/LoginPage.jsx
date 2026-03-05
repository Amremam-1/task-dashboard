import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react"

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

const LoginPage = () => {
  const [showPassword, setShowpassword] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)

    // mock login success
    navigate("/dashboard")

    reset()
  }

  return (
    <div>
      <h1 className="text-textPrimary text-3xl md:text-5xl font-semibold text-center">
        Login
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

            <div className="relative">
              <input
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="py-2 px-5 w-70 md:w-90 rounded-md border border-borderColor bg-input focus:outline-none focus:ring-2 focus:ring-primary pr-12"
              />

              <button
                type="button"
                onClick={() => setShowpassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

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
            Login
          </button>
        </form>

        {/* Links */}

        <div className="mt-8 flex justify-between items-center">
          <Link
            className="underline text-textSecondary hover:text-primary"
            to=""
          >
            Forget Password?
          </Link>

          <Link
            className="underline text-primary hover:opacity-80"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
