
import googleIcon from "../../assets/icons/google-svgrepo-com.svg"

type ButtonProps = {
    handleClick: () => any;
};


const LoginForm = ({ handleClick }: ButtonProps) => {
    return (
        <form className="space-y-4 md:space-y-6" action="#">
            <div className="flex-col items-start justify-start">
                <label className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
            </div>
            <div>
                <label className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                </div>
                <span className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</span>
            </div>

            <button onClick={handleClick} type="button" className="flex items-center justify-center w-full bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <img className="mr-3" src={googleIcon} alt="google" width="30" />
                <span>Sign in with Google</span>
            </button>

            <button type="submit" className="w-full text-white bg-primary hover:bg-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</span>
            </p>
        </form>
    )
}

export default LoginForm