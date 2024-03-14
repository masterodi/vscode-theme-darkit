import { useNavigate, useParams } from '@solidjs/router';
import { For } from 'solid-js';
import Dialog from '../../components/Dialog';
import { useJobsContext } from './jobs-provider';

// Lorem ipsum dolor

const DialogJobDetails = () => {
	const params = useParams();
	const navigate = useNavigate();
	const { jobs } = useJobsContext();
	const job = () => jobs()?.find((job) => job.id === params.id);

	return (
		<Dialog open={!!params.id} setOpen={(_) => navigate('/jobs')}>
			<div class="[&>*+*]:mt-2">
				<h2 class="text-xl font-bold">{job()?.job_title}</h2>
				<p>
					<span class="font-semibold">Company:</span>{' '}
					{job()?.company_name}
				</p>
				<p>
					<span class="font-semibold">Employment Type:</span>{' '}
					{job()?.employment_type}
				</p>
				<p>
					<span class="font-semibold">Industry:</span>{' '}
					{job()?.industry}
				</p>
				<div>
					<p>
						<span class="font-semibold">Required skills:</span>
					</p>
					<ul class="ml-8 list-disc">
						<For each={job()?.required_skills}>
							{(skill) => <li>{skill}</li>}
						</For>
					</ul>
				</div>
				<p>
					<span class="font-semibold">Required education Level:</span>{' '}
					{job()?.education_level}
				</p>
				<p>
					<span class="font-semibold">
						Recommended years of experience:
					</span>{' '}
					{job()?.years_experience}+
				</p>
				<p>
					<span class="font-semibold">Location:</span>{' '}
					{job()?.location}
				</p>
				<p>
					<span class="font-semibold">Deadline:</span>{' '}
					{job()?.application_deadline.toLocaleDateString('en-GB')}
				</p>
				<p>
					<span class="font-semibold">Contact:</span>{' '}
					{job()?.contact_email}
				</p>
				<section>
					<p class="font-semibold">Requirements</p>
					<p>{job()?.requirements}</p>
				</section>
				<section>
					<p class="font-semibold">Description</p>
					<p>{job()?.job_description}</p>
				</section>
			</div>
		</Dialog>
	);
};

export default DialogJobDetails;
