import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye } from "lucide-react"


export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async () => {
    setLoading(true)
    setError("")

    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (res.ok) {
        console.log("Login success:", data)
        navigate("/home")
      } else {
        setError(data.error || "Login failed")
      }
    } catch (err) {
      setError("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-10 bg-[#f5f7fa]">
      <div className="w-full max-w-lg z-10">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Login to ReferralHub
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button className="w-full mb-6 py-3 border border-blue-300 text-blue-600 rounded hover:bg-blue-50">
            Continue with Google/Microsoft
          </button>

          <div className="mb-6">
            <p className="text-gray-700 mb-2">Magic Link Login</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mb-2 py-3 px-4 border border-gray-300 rounded"
            />
            <button className="w-full py-3 text-white rounded border border-r-0 border-transparent bg-gradient-to-r from-[#6686ff] via-[#6686ff] to-white hover:from-[#4c6aff] hover:via-[#4c6aff] hover:to-white">
              Send Magic Link
            </button>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-3 px-4 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <Eye size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 text-gray-600">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember Me</span>
              </label>
              <Link to="/forgot-password" className="text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>
           
            <button
              onClick={handleLogin}
              disabled={loading}
             className="w-full py-3 text-white rounded border border-r-0 border-transparent bg-gradient-to-r from-[#6686ff] via-[#6686ff] to-white hover:from-[#4c6aff] hover:via-[#4c6aff] hover:to-white"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <SocialButton provider="google" />
            <SocialButton provider="facebook" />
            <SocialButton provider="twitter" />
            <SocialButton provider="linkedin" />
          </div>

          <div className="mt-6 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialButton({ provider }) {
    const getIcon = () => {
      switch (provider) {
        case "google":
          return (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-6 h-6"
            />
          )
        case "facebook":
          return (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
              className="w-6 h-6"
            />
          )
        case "twitter":
          return (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023.svg"
              alt="Twitter"
              className="w-6 h-6"
            />
          )
        case "linkedin":
          return (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          )
        default:
          return null
      }
    }
  
    return (
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50"
        aria-label={`Sign in with ${provider}`}
      >
        {getIcon()}
      </button>
    )
  }

