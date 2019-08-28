import { makeRequest } from './index';

export function getManagerDependencies(managerId) {
	return makeRequest().get(`?manager=${managerId}`);
}
