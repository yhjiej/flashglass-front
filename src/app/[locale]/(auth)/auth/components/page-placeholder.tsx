import { LanguageSwitch } from '@/components/language-switch'
import { Link } from '@/i18n/routing'
import { PaletteIcon } from 'lucide-react'
import Image from 'next/image'

export function AuthPlaceholder({ children }: { children: React.ReactNode }) {
	return (
		<div className='grid min-h-svh lg:grid-cols-2'>
			<div className='flex flex-col gap-4 p-6 md:p-10'>
				<div className='flex justify-between gap-2'>
					<Link href='/' className='flex items-center gap-2 font-medium'>
						<div className='flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground'>
							<PaletteIcon className='size-5' />
						</div>
						Flashglass
					</Link>
					<LanguageSwitch />
				</div>
				<div className='flex flex-1 items-center justify-center'>
					<div className='w-full max-w-[21rem]'>{children}</div>
				</div>
			</div>
			<div className='relative hidden bg-muted lg:block'>
				<Image src='/placeholder.jpg' alt='Image' className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale' />
			</div>
		</div>
	)
}
