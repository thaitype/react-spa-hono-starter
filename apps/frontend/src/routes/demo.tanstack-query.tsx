import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { api, getExpense } from '~/libs/api'

export const Route = createFileRoute('/demo/tanstack-query')({
  component: TanStackQueryDemo,
})

function TanStackQueryDemo() {

  const { data: expenseData } = useQuery({
    queryKey: ['expense'],
    queryFn: getExpense,
  })

  return (
    <div className="p-4">
      <h2 className="text-xl mt-6">Expense</h2>
      <p>
        {expenseData ? (
          <pre className="p-4 rounded">
            {JSON.stringify(expenseData, null, 2)}
          </pre>
        ) : (
          'Loading...'
        )}
      </p>
    </div>
  )
}
