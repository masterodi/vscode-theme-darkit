// @ts-nocheck
import { For, Show, createSignal, onCleanup, onMount } from 'solid-js';

export type SingleValue<O> = O | null;
export type MultiValue<O> = readonly O[];
type PropsValue<O> = SingleValue<O> | MultiValue<O>;

export type SelectValue<O, Multi extends boolean> = Multi extends true
	? MultiValue<O>
	: SingleValue<O>;

type SelectProps<O, Multi extends boolean> = {
	multi?: Multi;
	options?: readonly O[];
	value?: PropsValue<O>;
	onChange?: (value: SelectValue<O, Multi>) => void;
};

const getOptionValueDefault = <O,>(option: O) =>
	(option as { value: unknown }).value as string;
const getOptionLabelDefault = <O,>(option: O) =>
	(option as { label: string }).label;
const eq = <O,>(op1: SingleValue<O>, op2: SingleValue<O>) =>
	getOptionValueDefault(op1) === getOptionValueDefault(op2);

const Select = <O = unknown, Multi extends boolean = boolean>(
	props: SelectProps<O, Multi>
) => {
	let containerRef: HTMLDivElement;
	let inputRef: HTMLDivElement;

	const [value, setValue] = createSignal<SelectValue<O, Multi>>(props.value);
	const [open, setOpen] = createSignal(false);

	const handleChange = (newValue: SelectValue<O, Multi>) => {
		props.onChange?.(newValue);
		setValue((_) => newValue);
		setOpen(false);
	};

	const handleSelect = (option: O) => {
		let newValue;

		if (props.multi) {
			if (value()?.some((el) => eq(el, option))) {
				newValue = value().filter((el) => !eq(el, option));
			} else {
				newValue = [...(!!value() ? value() : []), option];
			}
		} else {
			newValue = option;
		}

		handleChange(newValue);
	};

	const handleCloseDropdownOnClickOutside = (ev: MouseEvent) => {
		if (!containerRef.contains(ev.target as HTMLElement)) {
			setOpen(false);
		}
	};

	const handleCloseDropdownOnBlur = (ev: FocusEvent) => {
		if (
			ev.relatedTarget &&
			!containerRef.contains(ev.relatedTarget as HTMLElement)
		) {
			setOpen(false);
		}
	};

	onMount(() => {
		document.addEventListener(
			'mousedown',
			handleCloseDropdownOnClickOutside
		);
		inputRef.addEventListener('blur', handleCloseDropdownOnBlur);
	});

	onCleanup(() => {
		document.removeEventListener(
			'mousedown',
			handleCloseDropdownOnClickOutside
		);
		inputRef.removeEventListener('blur', handleCloseDropdownOnBlur);
	});

	return (
		<div ref={containerRef!} class="relative">
			<div
				ref={inputRef!}
				tabIndex="0"
				class="flex min-h-[40px] w-full cursor-pointer items-center rounded-md bg-primary-500/25 p-2 text-start focus:border-2 focus:border-primary-400 focus:bg-primary-500/35 focus:outline-2 focus:outline-primary-400"
				onFocus={() => setOpen(true)}
			>
				<Show when={!props.multi}>
					<Show
						when={props.value}
						fallback={
							<span>
								{value() ? getOptionLabelDefault(value()) : ''}
							</span>
						}
					>
						<span>
							{props.value
								? getOptionLabelDefault(props.value)
								: ''}
						</span>
					</Show>
				</Show>

				<Show when={props.multi}>
					<div class="flex flex-wrap items-center gap-1">
						<For each={value() ?? []}>
							{(v) => (
								<span class="flex cursor-default items-center gap-2 whitespace-nowrap rounded-md bg-primary-600 px-2 text-sm text-neutral-50">
									{getOptionLabelDefault(v)}
									<button
										class="text-md font-bold hover:text-red-400"
										onClick={() => handleSelect(v)}
									>
										x
									</button>
								</span>
							)}
						</For>
					</div>
				</Show>
			</div>

			<div
				class="absolute inset-x-0 top-full z-30 mt-1 max-h-[180px] overflow-y-auto rounded-lg bg-primary-200 [&>*+*]:mt-2"
				classList={{ block: open(), hidden: !open() }}
			>
				<ul>
					<For each={props.options}>
						{(option, _) => (
							<li
								class="cursor-pointer rounded-lg p-2 hover:bg-primary-400/50 active:bg-primary-400/75"
								classList={{
									'text-primary-500':
										(!props.multi &&
											value() &&
											eq(value(), option)) ||
										(props.multi &&
											value() &&
											value()?.some((el) =>
												eq(el, option)
											)),
								}}
								onClick={() => handleSelect(option)}
							>
								{getOptionLabelDefault(option)}
							</li>
						)}
					</For>
				</ul>
			</div>
		</div>
	);
};

export default Select;
