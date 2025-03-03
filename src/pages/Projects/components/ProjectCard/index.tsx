import { Link } from "react-router";

import { IDS_ROUTE, ROUTES } from "@/utils/constants";
import { IProject } from "@/utils/types";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ProjectCardProps {
    project: IProject;
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            to={ROUTES.PROJECT_DETAIL.replace(
                `:${IDS_ROUTE.PROJECT_ID}`,
                project.id + '',
            )}
        >
            <Card>
                <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.des}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <p>Tất cả yêu cầu</p>
                        <p>{project.totalTask}</p>
                    </div>
                    <Separator />
                    <div>
                        <p>Yêu cầu đã hoàn thành</p>
                        <p>{project.successTask}</p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

export default ProjectCard;
