import Link from 'next/link';
import { FaTwitter, FaGithub } from 'react-icons/fa';

import LogoMinor from '@/assets/logo-minor.svg';

import { Button } from '@/ui/Button';
import { Card, CardContent, CardFooter } from '@/ui/Card';
import { Checkbox } from '@/ui/Checkbox';
import { Input } from '@/ui/Input';
import { Label } from '@/ui/Label';

const RegisterPage = () => {
    return (
        <section>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <LogoMinor className="mx-auto h-32 w-32 rotate-45" />
                    <h2 className="section-title text-dark mt-6 text-center">
                        <span className="animated-gradient-text">Create</span> a new account
                    </h2>
                </div>

                <Card className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <CardContent className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <Label htmlFor="preferred-username">Username</Label>
                                <div className="mt-2">
                                    <Input id="preferred-username" name="preferred-username" type="text" required />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="email">Email address</Label>
                                <div className="mt-2">
                                    <Input id="email" name="email" type="email" autoComplete="email" required />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="password">Password</Label>
                                <div className="mt-2">
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <div className="mt-2">
                                    <Input
                                        id="confirm-password"
                                        name="confirm-password"
                                        type="confirm-password"
                                        autoComplete="current-password"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <Button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Register
                                </Button>
                            </div>
                        </form>

                        <div>
                            <div className="relative mt-10">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-400" />
                                </div>
                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                    <span className="bg-white px-6 text-gray-900">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                                >
                                    <FaTwitter className="h-5 w-5" />
                                    <span className="text-sm font-semibold leading-6">Twitter</span>
                                </a>

                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                                >
                                    <FaGithub className="h-5 w-5" />
                                    <span className="text-sm font-semibold leading-6">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter className="flex items-center text-center">
                        <p className="mt-10 w-full text-center text-sm text-gray-500">
                            Already a member?{' '}
                            <Link
                                href="/login"
                                className="font-semibold text-accent-vibrant transition-colors hover:text-accent-hover"
                            >
                                Log in now
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
};

export default RegisterPage;
